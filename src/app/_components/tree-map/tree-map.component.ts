import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Treemap, Model } from '@gooddata/react-components';
import {  
  projectId,
  locationResortIdentifier,
  franchiseFeesAdRoyaltyIdentifier,
  franchiseFeesIdentifier,
  totalSalesIdentifier,
  grossProfitIdentifier,
} from '../../../utils/fixtures';
import { positiveAttributeFilter } from '@gooddata/react-components/dist/helpers/model';

interface TreemapBucketProps {
  measures: any[];
  viewBy?: any;
  segmentBy?:any;
  filters?: any[];
  sortBy?: any[];
  config?:any;
}
interface TreemapProps {
  projectId: (any);
}

@Component({
  selector: 'app-tree-map',
  template: '<div class="tree-map" style="height:300px" [id]="rootDomID"></div>',
})

export class TreemapComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() projectId: (any);
  @Input() viewBy:any;
  @Input() config:any;
  @Input() sortBy:any;

  xMeasures=[
    Model.measure(franchiseFeesAdRoyaltyIdentifier)
        .alias("Franchise Fee")
        .format("[>=100000][color=2190c0] #,##0.##$; [>=50000][color=A7BC0A] #,##0.##$; [>=20000][color=A7BC0A] #,##0.##$; [>=10000][color=EF3333] #,##0.##$; [>=0][color=c02190] #,##0.##$; [=Null] No data"),
    Model.measure(totalSalesIdentifier)
      .format("#,##0")
      .alias("$ Total Sales"),
    Model.measure(franchiseFeesIdentifier)
      .alias("Franchise Fee")
      .format("$#,##0.00"),
    Model.measure(grossProfitIdentifier)
      .alias("Gross Profit")
      .format("$#,##0.00")
  ]
                     
  xSegmentBy=Model.attribute(locationResortIdentifier)
  filterLocationResort=[Model.positiveAttributeFilter(locationResortIdentifier,["Irving","Montgomery","San Jose","Deerfield Beach"],true)]
  xconfig={
    //colors: ['rgb(195, 49, 73)', 'rgb(168, 194, 86)','rgb(213, 214, 0)','rgb(65, 69, 195)'],
    dataLabels: {
        visible: true // 'auto' | true | false
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
  protected getProps(): TreemapProps | TreemapBucketProps {
    return {
      projectId: projectId,
      measures: this.xMeasures,
      viewBy: this.viewBy,
      segmentBy:this.xSegmentBy,
      filters: this.filterLocationResort,
      config:this.xconfig,
      sortBy:this.sortBy,
    };
  }


  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Treemap, this.getProps()), this.getRootDomNode());
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