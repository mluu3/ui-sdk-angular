import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Headline, Model } from '@gooddata/react-components';
import {  
  projectId,
  locationResortIdentifier,
  franchiseFeesAdRoyaltyIdentifier,
  franchiseFeesIdentifier,
  totalSalesIdentifier,
  grossProfitIdentifier,
} from '../../../utils/fixtures';

import { positiveAttributeFilter, attribute } from '@gooddata/react-components/dist/helpers/model';

interface HeadlineBucketProps {
  primaryMeasure:any;
  secondaryMeasure?:any;
  filters?: any[];
  sortBy?: any[];
  config?:any;
  locale?:any;
}
interface HeadlineProps {
  projectId: (any);
}

@Component({
  selector: 'app-head-line',
  template: '<div class="head-line" style="height:100px" [id]="rootDomID"></div>',
})

export class HeadlineComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() projectId: (any);
  @Input() locale:any;
  @Input() config:any;
  @Input() sortBy:any[];
  @Input() filters:any[];

  primaryMeasure=Model.measure(totalSalesIdentifier).format("#,##0").alias("$ Total Sales")
  
  secondaryMeasure=Model.measure(franchiseFeesIdentifier).alias("Franchise Fee").format("$#,##0.00")

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
  protected getProps(): HeadlineProps | HeadlineBucketProps {
    return {
      projectId: projectId,
      primaryMeasure: this.primaryMeasure,
      secondaryMeasure: this.secondaryMeasure,      
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
      ReactDOM.render(React.createElement(Headline, this.getProps()), this.getRootDomNode());
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