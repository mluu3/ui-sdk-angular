import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import {ColumnChart, Model} from '@gooddata/react-components';

import { 
  projectId,
  totalSalesIdentifier, 
  locationResortIdentifier,
  franchiseFeesAdRoyaltyIdentifier, 
  totalCostsIdentifier,
  franchiseFeesIdentifier
} from "../../../utils/fixtures";

interface DualColumnChartBucketProps {
  measures: any[];
  viewBy?: any[];  
  stackBy?:any;
  filters?: any[];
  sortBy?: any[];  
  config?:any;
}
interface DualColumnChartProps {
  projectId: any;   
}

@Component({
  selector: 'app-dual-column-chart',
  template: '<div class="dual-column-chart" style="height:500px" [id]="rootDomID"></div>',  
})
export class DualColumnChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() projectId:any;
  @Input() sortBy: any[];
  @Input() stackBy: any;
  @Input() filters: any[];

  totalSalesLocalIdentifier="totalSales"
  totalCostsLocalIdentifier="totalCosts"
  
  xMeasures1 = [
    Model.measure(totalSalesIdentifier)
        .format("#,##0")
        .alias("$ Total Sales")
        .localIdentifier(this.totalSalesLocalIdentifier),
    Model.measure(totalCostsIdentifier)
        .format("#,##0")
        .alias("$ Total Cost")
        .localIdentifier(this.totalCostsLocalIdentifier)
      ]
  // xMeasures2=
  //   Model.measure(franchiseFeesAdRoyaltyIdentifier)
  //       .alias("Franchise Fee AdRoyalty")
  //       .format("$#,##0.00")
  //       .localIdentifier(this.xFranchiseFeesAdRoyalty)

  // xMeasures3=
  //   Model.measure(totalCostsIdentifier)
  //        .format("#,##0")
  //        .alias("$ Total Cost")
         

  // xMeasures4=
  //   Model.measure(franchiseFeesIdentifier)
  //        .alias("Franchise Fee")
  //        .format("$#,##0.00")
  //        .localIdentifier(this.xFranchiseFees)
  
  
  xViewBy = [Model.attribute(locationResortIdentifier)]
 // filterLocationResort=[Model.positiveAttributeFilter(locationResortIdentifier,["Irving","Montgomery","San Jose","Deerfield Beach"],true)]
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
    secondary_yaxis: {
      visible: true,
      labelsEnabled: true,
      rotation: "auto",
      //min: "-75000000",
      //max: "75000000",
      measures: [this.totalSalesLocalIdentifier],
      //measures:[this.xMeasures1]
    },
    yaxis: {
      visible: true,
      labelsEnabled: true,
      rotation: "auto",
      //min: "-75000000",
      //max: "75000000",
      measures: [this.totalCostsLocalIdentifier],
      //measures:[this.xMeasures3]
    },        
  }
  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getProps(): DualColumnChartProps | DualColumnChartBucketProps {
    return {
      projectId:projectId,
      measures: this.xMeasures1,
      viewBy: this.xViewBy,
      stackBy:this.stackBy,
      filters: this.filters,
      config:this.xconfig
    };
  }
  
  private isMounted(): boolean {
    return !!this.rootDomID;
  }
  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(ColumnChart, this.getProps()), this.getRootDomNode());
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
