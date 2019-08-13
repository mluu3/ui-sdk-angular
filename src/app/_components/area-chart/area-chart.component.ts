import * as React from 'react';
import * as ReactDOM from  'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';

import { Component, OnInit, Input, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import {AreaChart, Model} from '@gooddata/react-components';

import {
  projectId,
  franchiseFeesIdentifier,
  locationResortIdentifier,
  totalSalesIdentifier,
  locationStateDisplayFormIdentifier,
} from '../../../utils/fixtures';

interface AreaChartBucketProps{
  measures:any[];
  viewBy?:any;
  stackBy?:(any);
  sortBy?:any[];
  locale?:any;
  config?:any;
  filters?:any[];
}
interface AreaChartProps {
  projectId: any;   
}

@Component({
  selector: 'app-area-chart',
  template: '<div class="area-chart" style="height:500px" [id]="rootDomID"></div>',
  // templateUrl: './area-chart.component.html',
  // styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() sortBy:any[];
  @Input() locale:any;  
  @Input() projectId:any;

  xMeasures = [
    Model.measure(totalSalesIdentifier)
        .format("#,##0")
        .alias("$ Total Sales")]
    

  xViewBy = Model.attribute(locationResortIdentifier)

  xStackBy=Model.attribute(locationStateDisplayFormIdentifier)

  filterLocationResort=[Model.positiveAttributeFilter(locationResortIdentifier,["Irving","Montgomery","San Jose","Deerfield Beach"],true)]
  xconfig={
    stackMeasuresToPercent:true,
    colors: ['rgb(195, 49, 73)', 'rgb(168, 194, 86)','rgb(213, 214, 0)','rgb(65, 69, 195)'],
    //colorPalette: CUSTOM_COLOR_PALETTE,
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
  }
  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getProps(): AreaChartProps | AreaChartBucketProps {
    return {
      projectId:projectId,
      measures: this.xMeasures,
      viewBy: this.xViewBy,
      stackBy:this.xStackBy,
      filters: this.filterLocationResort,
      sortBy:this.sortBy,
      config:this.xconfig,
      locale:"ja-JP"
    };
  }
  private isMounted(): boolean {
    return !!this.rootDomID;
  }
  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(AreaChart, this.getProps()), this.getRootDomNode());
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
