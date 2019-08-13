import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { BubbleChart, Model } from '@gooddata/react-components';
import {  
  projectId,
  locationResortIdentifier,
  franchiseFeesAdRoyaltyIdentifier,
  franchiseFeesIdentifier,
  totalSalesIdentifier,
  grossProfitIdentifier,
} from '../../../utils/fixtures';

import { positiveAttributeFilter, attribute } from '@gooddata/react-components/dist/helpers/model';

interface BubbleChartBucketProps {
  xAxisMeasure?: any;
  yAxisMeasure?: any;
  size?: any;
  viewBy?:any;
  filters?: any[];
  sortBy?: any[];
  config?:any;
  locale?:any;
}
interface BubbleChartProps {
  projectId: (any);
}

@Component({
  selector: 'app-bubble-chart',
  template: '<div class="bubble-chart" style="height:300px" [id]="rootDomID"></div>',
})

export class BubbleChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() projectId: (any);
  @Input() locale:any;
  @Input() config:any;
  @Input() sortBy:any[];
  @Input() filters:any[];

  xAxismeasure=Model.measure(totalSalesIdentifier).format("#,##0").alias("$ Total Sales")
  
  yAxismeasure=Model.measure(franchiseFeesIdentifier).alias("Franchise Fee").format("$#,##0.00")

  size=Model.measure(grossProfitIdentifier).alias("Gross Profit").format("$#,##0.00")

  viewBy=Model.attribute(locationResortIdentifier)

  //filterLocationResort=[Model.positiveAttributeFilter(locationResortIdentifier,["Irving","Montgomery","San Jose","Deerfield Beach"],true)]

  xconfig={
    //colors: ['rgb(195, 49, 73)', 'rgb(168, 194, 86)','rgb(213, 214, 0)','rgb(65, 69, 195)'],
    dataLabels: {
        visible: 'auto' // 'auto' | true | false
    },
    legend: {
      enabled: true, // boolean
      position: 'left', // 'top' | 'left' | 'right' | 'bottom'
    },
    separators: {
      thousand: ',',
      decimal: '.'
    }
  }
  
  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getProps(): BubbleChartProps | BubbleChartBucketProps {
    return {
      projectId: projectId,
      xAxisMeasure: this.xAxismeasure,
      yAxisMeasure: this.yAxismeasure,
      size:this.size,
      viewBy:this.viewBy,      
      filters: this.filters,
      config:this.xconfig,
      sortBy:this.sortBy,
      locale:this.locale,
    };
  }


  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(BubbleChart, this.getProps()), this.getRootDomNode());
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