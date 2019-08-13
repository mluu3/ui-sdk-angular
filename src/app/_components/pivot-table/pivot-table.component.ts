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


interface PivotTableBucketProps {
  projectId:any;
  measures?: any[];
  rows?: any[];
  columns?: any[];
  totals?: any[];
  filters?: any[];
  sortBy?: any[];
}
interface PivotTableProps {
  projectId: any;  
  pageSize:number;
  config: (any),
  groupRows:boolean,
  exportTitle:string
}

@Component({
  selector: 'app-pivot-table',
  template: '<div class="pivot-table" style="height:500px" [id]="rootDomID"></div>'
  // templateUrl: './pivot-table.component.html',
  // styleUrls: ['./pivot-table.component.css']
})
export class PivotTableComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit  {
  @Input() projectId: any;
  @Input() pageSize: number;
  @Input() groupRows: boolean;
  @Input() exportTitle: string;
  @Input() totals: any[];
  @Input() filters: any[];
  @Input() config: any;
  

  xMeasures=[
    Model.measure(franchiseFeesIdentifier).format("#,##0"),
    Model.measure(franchiseFeesAdRoyaltyIdentifier).format("#,##0"),
    Model.measure(franchiseFeesInitialFranchiseFeeIdentifier).format("#,##0"),
    Model.measure(franchiseFeesIdentifierOngoingRoyalty).format("#,##0"),
 ]
  xRows=[
    Model.attribute(locationStateDisplayFormIdentifier),
    Model.attribute(locationNameDisplayFormIdentifier),
    Model.attribute(menuCategoryAttributeDFIdentifier).localIdentifier("menu"),
]
  xColumns=[Model.attribute(quarterDateIdentifier), Model.attribute(monthDateIdentifier)]

  xSortBy = [Model.attributeSortItem("menu", "asc")];

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  
  protected getProps(): PivotTableProps | PivotTableBucketProps {
    return {
      projectId: projectId,     
      measures:this.xMeasures,
      rows:this.xRows,
      columns:this.xColumns,
      totals:this.totals,
      filters:this.filters,
      sortBy:this.xSortBy,
      pageSize:this.pageSize,
      groupRows:this.groupRows,
      exportTitle:this.exportTitle,
      config:this.config
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
