import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import {ColumnChart, Model} from '@gooddata/react-components';

import { totalSalesIdentifier, dateDataSetUri,quarterDateIdentifier, projectId } from "../../../utils/fixtures";

interface PreviousPeriodColumnChartExampleBucketProps {
  measures: any[];
  viewBy?: any[];  
  stackBy?:any;
  filters?: any[];
  sortBy?: any[];  
  config?:any;
  onLoadingChanged?:any;
  onError?:any;
}
interface PreviousPeriodColumnChartExampleProps {
  projectId: any;   
}

@Component({
  selector: 'app-previous-period-column-chart-example',
  template: '<div class="previous-period-column-chart-example" style="height:500px" [id]="rootDomID"></div>',
})
export class PreviousPeriodColumnChartExampleComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() projectId:any;
  @Input() sortBy: any[];
  //@Input() filters: any[];
  @Input() stackBy: any;

  xMeasures = [
    Model.measure(totalSalesIdentifier).localIdentifier("totalSales").alias("$ Total Sales"),
    Model.previousPeriodMeasure("totalSales",[{ dataSet: dateDataSetUri, periodsAgo: 1 },]).alias("$ Total Sales - period ago"),]

  xViewBy = [Model.attribute(quarterDateIdentifier)]

  xFilters=[Model.relativeDateFilter(dateDataSetUri, "GDC.time.year", -2, -1)]

  //xSortByMeasure=[Model.measureSortItem(totalSalesIdentifier,"desc")]
  //xSortByAttribute=[Model.attributeSortItem(locationResortIdentifier, "desc")]

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
    stackMeasures: false,
    stackMeasuresToPercent:false,    
  }

  onLoadingChanged(...params) {
    // eslint-disable-next-line no-console
    return console.log("PreviousPeriodColumnChartExampleComponent onLoadingChanged", ...params);
  }

  onError(...params) {
    // eslint-disable-next-line no-console
    return console.log("PreviousPeriodColumnChartExampleComponent onError", ...params);
  }

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getProps(): PreviousPeriodColumnChartExampleProps | PreviousPeriodColumnChartExampleBucketProps {
    return {
      projectId:projectId,
      measures: this.xMeasures,
      viewBy: this.xViewBy,
      stackBy:this.stackBy,
      filters: this.xFilters,
      sortBy:this.sortBy,
      config:this.xconfig,
      onLoadingChanged:this.onLoadingChanged,
      onError:this.onError,
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
