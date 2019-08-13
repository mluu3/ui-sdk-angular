import * as React from 'react';
import * as ReactDOM from  'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';

import { Component, OnInit, Input, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import {ComboChart, Model} from '@gooddata/react-components';

import {
  projectId,
  franchiseFeesIdentifier,
  locationResortIdentifier,
  totalSalesIdentifier,
  locationStateDisplayFormIdentifier,
} from '../../../utils/fixtures';

interface ComboChartBucketProps{
  primaryMeasures:any[];
  secondaryMeasures:any[];
  viewBy?:any;  
  sortBy?:any[];
  //locale?:any;
  config?:any;
  filters?:any[];
}
interface ComboChartProps {
  projectId: any;   
}

@Component({
  selector: 'app-combo-chart',
  template: '<div class="combo-chart" style="height:500px" [id]="rootDomID"></div>',
  // templateUrl: './combo-chart.component.html',
  // styleUrls: ['./combo-chart.component.css']
})
export class ComboChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() sortBy:any[];
  //@Input() locale:any;  
  @Input() projectId:any;
  @Input() filters:any;

  xPrimaryMeasures = [
    Model.measure(totalSalesIdentifier)
        .format("#,##0")
        .alias("$ Total Sales")]
  xSecondaryMeasures = [
    Model.measure(franchiseFeesIdentifier)
        .format("#,##0")
        .alias("$ Franchise Fees")]

  xViewBy = Model.attribute(locationStateDisplayFormIdentifier)  

  //filterLocationResort=[Model.positiveAttributeFilter(locationResortIdentifier,["Irving","Montgomery","San Jose","Deerfield Beach"],true)]
  xconfig={
    //stackMeasuresToPercent:true,
    //colors: ['rgb(195, 49, 73)', 'rgb(168, 194, 86)','rgb(213, 214, 0)','rgb(65, 69, 195)'],
    //colorPalette: CUSTOM_COLOR_PALETTE,
    primaryChartType: 'column', // string
    secondaryChartType: 'area', // string

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
  protected getProps(): ComboChartProps | ComboChartBucketProps {
    return {
      projectId:projectId,
      primaryMeasures: this.xPrimaryMeasures,
      secondaryMeasures:this.xSecondaryMeasures,
      viewBy: this.xViewBy,
      filters: this.filters,
      sortBy:this.sortBy,
      config:this.xconfig,
      //locale:"ja-JP"
    };
  }
  private isMounted(): boolean {
    return !!this.rootDomID;
  }
  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(ComboChart, this.getProps()), this.getRootDomNode());
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
