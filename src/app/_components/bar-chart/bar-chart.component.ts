import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';

import { BarChart, Model} from '@gooddata/react-components';
import { 
  projectId,
  totalSalesIdentifier, 
  locationResortIdentifier,
  franchiseFeesAdRoyaltyIdentifier   
} from "../../../utils/fixtures";

interface BarChartBucketProps {
  measures: any[];
  viewBy?: any[];  
  stackBy?:any;
  filters?: any[];
  sortBy?: any[];  
  config?:any;
}
interface BarChartProps {
  projectId: any;  
 
}

@Component({
  selector: 'app-bar-chart',
  template: '<div class="bar-chart" style="height:500px" [id]="rootDomID"></div>',
  // templateUrl: './bar-chart.component.html',
  // styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
@Input() projectId:any;
@Input() sortBy: any[];
@Input() stackBy: any

  xMeasures = [
    Model.measure(totalSalesIdentifier)
        .format("#,##0")
        .alias("$ Total Sales"),
    Model.measure(franchiseFeesAdRoyaltyIdentifier)
        .alias("Franchise Fee")
        .format("$#,##0.00")]

  xViewBy = [Model.attribute(locationResortIdentifier)]
  filterLocationResort=[Model.positiveAttributeFilter(locationResortIdentifier,["Irving","Montgomery","San Jose","Deerfield Beach"],true)]
  xconfig={
    //colors: ['rgb(195, 49, 73)', 'rgb(168, 194, 86)','rgb(213, 214, 0)','rgb(65, 69, 195)'],
    dataLabels: {
        visible: 'auto' // 'auto' | true | false
    },
    legend: {
      enabled: true, // boolean
      position: 'top', // 'top' | 'left' | 'right' | 'bottom'
    },
    separators: {
      thousand: ',',
      decimal: '.'
    },
    // dualAxis:true,
    stackMeasures: true,
    stackMeasuresToPercent:true
    // secondary_xaxis:{  // Dual axis - measure on right
    //   visible:true,
    //   enabledLabels:true,
    //   measures:[franchiseFeesAdRoyaltyIdentifier], 
    //   rotation:'45'
    // },
  }
  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getProps(): BarChartProps | BarChartBucketProps {
    return {
      projectId:projectId,
      measures: this.xMeasures,
      viewBy: this.xViewBy,
      stackBy:this.stackBy,
      filters: this.filterLocationResort,
      config:this.xconfig
    };
  }
  
  private isMounted(): boolean {
    return !!this.rootDomID;
  }
  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(BarChart, this.getProps()), this.getRootDomNode());
    }
    
  }
  ngOnInit() {
    this.rootDomID = uuid.v1();
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }
  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }

}
