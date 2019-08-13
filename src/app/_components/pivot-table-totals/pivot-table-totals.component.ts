import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';

import '@gooddata/react-components/styles/css/main.css';
import { PivotTable, Model } from '@gooddata/react-components';
import {
  projectId,
  quarterDateIdentifier,
  monthDateIdentifier,
  locationStateDisplayFormIdentifier,
  locationNameDisplayFormIdentifier,
  franchiseFeesIdentifier,
  franchiseFeesAdRoyaltyIdentifier,
  franchiseFeesInitialFranchiseFeeIdentifier,
  franchiseFeesIdentifierOngoingRoyalty,
  menuCategoryAttributeDFIdentifier,
} from '../../../utils/fixtures.js';


interface PivotTableTotalsBucketProps {
  projectId:any;
  measures?: any[];
  rows?: any[];
  columns?: any[];
  totals?: any[];
  filters?: any[];
  sortBy?: any[];
}
interface PivotTableTotalsProps {
  projectId: any;  
  pageSize:number;
  config: (any),
  groupRows:boolean,
  exportTitle:string
}

@Component({
  selector: 'app-pivot-table-totals',
  template: '<div class="pivot-table-totals" style="height:500px" [id]="rootDomID"></div>',
})
export class PivotTableTotalsComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit  {
  @Input() projectId: any;
  @Input() pageSize: number;
  @Input() groupRows: boolean;
  @Input() exportTitle: string;
  //@Input() totals: any[];
  @Input() filters: any[];
  @Input() sortBy: any[];
  //@Input() config: any;
  

  xMeasures=[
    Model.measure(franchiseFeesIdentifier).format("#,##0").localIdentifier("franchiseFeesIdentifier"),
    Model.measure(franchiseFeesAdRoyaltyIdentifier).format("#,##0").localIdentifier("franchiseFeesAdRoyaltyIdentifier"),
    Model.measure(franchiseFeesInitialFranchiseFeeIdentifier).format("#,##0").localIdentifier("franchiseFeesInitialFranchiseFeeIdentifier"),
    Model.measure(franchiseFeesIdentifierOngoingRoyalty).format("#,##0").localIdentifier("franchiseFeesIdentifierOngoingRoyalty"),
  ]
  xRows=[
    Model.attribute(locationStateDisplayFormIdentifier).localIdentifier("state"),
    Model.attribute(locationNameDisplayFormIdentifier),
    Model.attribute(menuCategoryAttributeDFIdentifier),
  ]
  xColumns=[Model.attribute(quarterDateIdentifier), Model.attribute(monthDateIdentifier)]

  //xSortBy = [Model.attributeSortItem("menu", "asc")];

  xTotals=[
    {
        measureIdentifier: "franchiseFeesIdentifier",
        type: "sum",
        attributeIdentifier: "state",
    },
    {
        measureIdentifier: "franchiseFeesIdentifier",
        type: "avg",
        attributeIdentifier: "state",
    },
    {
        measureIdentifier: "franchiseFeesAdRoyaltyIdentifier",
        type: "sum",
        attributeIdentifier: "state",
    },
    {
        measureIdentifier: "franchiseFeesIdentifier",
        type: "max",
        attributeIdentifier: "state",
    },
  ];

  xConfig={
    menu:{
      aggregations: true,
      aggregationsSubMenu: true,
    }
  }

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  
  protected getProps(): PivotTableTotalsProps | PivotTableTotalsBucketProps {
    return {
      projectId: projectId,     
      measures:this.xMeasures,
      rows:this.xRows,
      columns:this.xColumns,
      totals:this.xTotals,
      filters:this.filters,
      sortBy:this.sortBy,
      pageSize:20,
      groupRows:true,
      exportTitle:this.exportTitle,
      config:this.xConfig
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(PivotTable, this.getProps()), this.getRootDomNode());
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
