
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';

import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { PieChart, Chart } from '@gooddata/react-components';
import { environment } from '../../environments/environment';
import { template } from '@angular/core/src/render3';


interface PieChartBucketProps {
  measures: any[];
  viewBy?: any;
  filters?: any[];
  sortBy?: any[];
}
interface PieChartProps {
  projectId: string;
}

@Component({
  selector: 'app-pie-chart',
  template: '<span>Test</span><span [id]="rootDomID"></span>'
})

export class PieChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() projectId: string;
  @Input() filters: any[];
  @Input() viewBy: any;


  xMeasures = [
    {
        measure: {
            localIdentifier: 'franchiseFeesAdRoyaltyIdentifier',
            definition: {
                measureDefinition: {
                    item: {
                        identifier: 'aa5JBkFDa7sJ'
                    }
                }
            },
            format: '#,##0'
        }
    }
]

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getProps(): PieChartProps | PieChartBucketProps {
    return {
      projectId: this.projectId,
      measures: this.xMeasures,
      viewBy: this.viewBy,
      filters: this.filters
    };
  }


  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(PieChart, this.getProps()), this.getRootDomNode());
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