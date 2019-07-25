import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';

import '@gooddata/react-components/styles/css/main.css';
import { PivotTable } from '@gooddata/react-components';
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
} from '../../utils/fixtures.js';


// interface PivotTableBucketProps {
//   measures?: any[];
//   rows?: any[];
//   columns?: any[];
//   totals?: any[];
//   filters?: any[];
//   sortBy?: any[];
// }
interface PivotTableProps {
  projectId: string;
  pageSize?: number;
  //config?: PivotTableConfigPros;
  groupRows?: boolean;
  exportTitle?: string;
  measures?: any[];
  rows?: any[];
  columns?: any[];
  totals?: any[];
  filters?: any[];
  sortBy?: any[];
}

@Component({
  selector: 'app-pivot-table',
  template: '<span [id]="rootDomID"></span>'
  // templateUrl: './pivot-table.component.html',
  // styleUrls: ['./pivot-table.component.css']
})
export class PivotTableComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit  {

  @Input() measures?: any[];
  @Input() projectId: string;
  @Input() rows?: any[];
  @Input() columns?: any[];
  @Input() pageSize?: number;
  @Input() groupRows?: boolean;
  @Input() exportTitle?: string;
  @Input() totals?: any[];
  @Input() filters?: any[];
  @Input() sortBy?: any[];
 // @Input() config?: (any);

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  // protected getBuckets(): PivotTableProps {
  //   const {
  //     measures,
  //     rows,
  //     columns,
  //     totals,
  //     filters,
  //     sortBy
  //   } = this;
  //   return {
  //     measures,
  //     rows,
  //     columns,
  //     totals,
  //     filters,
  //     sortBy
  //   };
  // }

  protected getProps(): PivotTableProps {
    const {
      projectId,
      pageSize,
     // config,
      groupRows,
      exportTitle,
      measures,
      rows,
      columns,
      totals,
      filters,
      sortBy
    } = this;
    return {
      projectId,
      pageSize,
     // config,
      groupRows,
      exportTitle,
      measures,
      rows,
      columns,
      totals,
      filters,
      sortBy
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
