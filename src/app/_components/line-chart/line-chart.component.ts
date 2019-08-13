import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import {LineChart, Model} from '@gooddata/react-components';

import { 
  projectId,
  totalSalesIdentifier, 
  locationStateAttributeIdentifier,
  locationResortIdentifier,
  franchiseFeesIdentifier,   
} from "../../../utils/fixtures";

import { CUSTOM_COLOR_PALETTE } from "../../../utils/colors";

interface LineChartBucketProps {
  measures: any[];
  trendBy?: (any);  
  segmentBy?:(any);
  filters?: any[];
  sortBy?: any[];  
  config?:any;
  locale?:any;
}
interface LineChartProps {
  projectId: any;   
}

@Component({
  selector: 'app-line-chart',
  template: '<div class="line-chart" style="height:500px" [id]="rootDomID"></div>',
  // templateUrl: './line-chart.component.html',
  // styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() projectId:any;
  @Input() sortBy: any[];
  @Input() segmentBy: (any);
  @Input() locale:any;
  
  xMeasures = [
    Model.measure(totalSalesIdentifier)
        .format("#,##0")
        .alias("$ Total Sales"),
    Model.measure(franchiseFeesIdentifier)
        .alias("Franchise Fee")
        .format("$#,##0.00")]

  xTrendBy = Model.attribute(locationResortIdentifier)
  filterLocationResort=[Model.positiveAttributeFilter(locationResortIdentifier,["Irving","Montgomery","San Jose","Deerfield Beach"],true)]
  xconfig={
    //colors: ['rgb(195, 49, 73)', 'rgb(168, 194, 86)','rgb(213, 214, 0)','rgb(65, 69, 195)'],
    colorPalette: CUSTOM_COLOR_PALETTE,
    dataLabels: {
        visible: 'auto' // 'auto' | true | false
    },
    legend: {
      enabled: true, // boolean
      position: 'top', // 'top' | 'left' | 'right' | 'bottom'
    },
    separators: {
      thousand: '.',
      decimal: ','
    },
  }
  
  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getProps(): LineChartProps | LineChartBucketProps {
    return {
      projectId:projectId,
      measures: this.xMeasures,
      trendBy: this.xTrendBy,
      segmentBy:this.segmentBy,
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
      ReactDOM.render(React.createElement(LineChart, this.getProps()), this.getRootDomNode());
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
