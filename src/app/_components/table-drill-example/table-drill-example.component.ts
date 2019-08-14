import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';

import '@gooddata/react-components/styles/css/main.css';
import { Table, Model, HeaderPredicateFactory } from '@gooddata/react-components';
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


interface TableDrillExampleBucketProps{
  projectId:any;
  measures?: any[];
  attributes?: any[];  
  drillableItems?:any[];
  totals?: any[];
  filters?: any[];
  sortBy?: any[];
}
interface TableDrillExampleProps {
  projectId: any;  
}

@Component({
  selector: 'app-table-drill-example',
  template: '<div class="table-drill-example" style="height:500px" [id]="rootDomID"></div>'
  // templateUrl: './table-drill-example.component.html',
  // styleUrls: ['./table-drill-example.component.css']
})
export class TableDrillExampleComponent extends React.Component<{}, {drillEvent} > implements OnInit, OnDestroy, OnChanges, AfterViewInit  {
  constructor(props) {
    super(props);
    this.state = {
        drillEvent: null,
    };
}
  @Input() projectId: any;
  @Input() filters: any[];
  @Input() sortBy: any[];

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

  xAttributes=[
    Model.attribute(locationStateDisplayFormIdentifier).localIdentifier("state"),
    Model.attribute(locationNameDisplayFormIdentifier).localIdentifier("name"),
    Model.attribute(menuCategoryAttributeDFIdentifier).localIdentifier("menu"),
  ] 
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


  //xSortBy = [Model.attributeSortItem("menu", "asc")]
  xDrillableItems = [
    HeaderPredicateFactory.identifierMatch(menuCategoryAttributeDFIdentifier),
    HeaderPredicateFactory.identifierMatch(franchiseFeesIdentifier),
  ];
  
  onDrill = drillEvent => {
    // eslint-disable-next-line no-console
    console.log(
        "onFiredDrillEvent",
        drillEvent,
        JSON.stringify(drillEvent.drillContext.intersection, null, 2),
    );
    this.setState({
        drillEvent,
    });
    return true;
};

  renderDrillValue() {
     const {drillEvent}  = this.state;

    if (!drillEvent) {
        return null;
    }

    const drillColumn = drillEvent.drillContext.row[drillEvent.drillContext.columnIndex];
    const drillValue = typeof drillColumn === "object" ? drillColumn.name : drillColumn;

    return ({drillValue});
  }
  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  
  protected getProps(): TableDrillExampleProps | TableDrillExampleBucketProps {
    return {
      projectId: projectId,     
      measures:this.xMeasures,
      attributes:this.xAttributes,
      totals:this.xTotals,
      filters:this.filters,
      sortBy:this.sortBy,
    };
  }

  private _isMounted(): boolean {
    return !!this.rootDomID;
  }

  render() {
    if (this._isMounted()) 
    return(
      ReactDOM.render(React.createElement(Table, this.getProps()), this.getRootDomNode())
    )
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
