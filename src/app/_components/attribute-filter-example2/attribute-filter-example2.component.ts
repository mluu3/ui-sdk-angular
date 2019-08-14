import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';

import '@gooddata/react-components/styles/css/main.css';
import { Table, Model, AttributeFilter } from '@gooddata/react-components';
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


interface AtributeFilterExample2BucketProps {
  projectId:any;
  measures?: any[];
  attributes?: any[];  
  totals?: any[];
  filters?: any[];
  sortBy?: any[];
}
interface AtributeFilterExample2Props {
  projectId: any;  
}

@Component({
  selector: 'app-_attribute-filter-table',
  template: '<div class="attribute-filter-Table" style="height:500px" [id]="rootDomID"></div>'
  // templateUrl: './attribute-filter-Table.component.html',
  // styleUrls: ['./attribute-filter-Table.component.css']
})


export class AttributeFilterExample2Component implements OnInit, OnDestroy, OnChanges, AfterViewInit  {
  @Input() projectId: any;
  //@Input() totals: any[];
  @Input() filters: any[];
  //@Input() sortBy: any[];

  
  xMeasures=[
    Model.measure(franchiseFeesIdentifier)
        .format("#,##0")
        .localIdentifier("franchiseFeesIdentifier"),
    Model.measure(franchiseFeesAdRoyaltyIdentifier)
        .format("#,##0")
        .localIdentifier("franchiseFeesAdRoyaltyIdentifier"),
    Model.measure(franchiseFeesInitialFranchiseFeeIdentifier)
        .format("#,##0")
        .localIdentifier("franchiseFeesInitialFranchiseFeeIdentifier"),
    Model.measure(franchiseFeesIdentifierOngoingRoyalty)
        .format("#,##0")
        .localIdentifier("franchiseFeesIdentifierOngoingRoyalty"),
  ]

  xAttributes=[Model.attribute(monthDateIdentifier).localIdentifier("month")]
 

  xTotals = [
    {
        measureIdentifier: "franchiseFeesIdentifier",
        type: "avg",
        attributeIdentifier: "month",
    },
    {
        measureIdentifier: "franchiseFeesAdRoyaltyIdentifier",
        type: "avg",
        attributeIdentifier: "month",
    },
    {
        measureIdentifier: "franchiseFeesInitialFranchiseFeeIdentifier",
        type: "avg",
        attributeIdentifier: "month",
    },
    {
        measureIdentifier: "franchiseFeesIdentifierOngoingRoyalty",
        type: "avg",
        attributeIdentifier: "month",
    },
  ];


 xSortBy = [Model.attributeSortItem("month", "asc")]

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  
  protected getProps(): AtributeFilterExample2Props | AtributeFilterExample2BucketProps {
    return {
      projectId: projectId,     
      measures:this.xMeasures,
      attributes:this.xAttributes,
      totals:this.xTotals,
      filters:this.filters,
      sortBy:this.xSortBy,
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Table, this.getProps()), this.getRootDomNode())
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


