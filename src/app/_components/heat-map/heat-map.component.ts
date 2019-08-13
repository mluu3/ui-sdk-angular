import * as React from 'react';
import * as ReactDOM from  'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';

import { Component, OnInit, Input, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import {Heatmap, Model} from '@gooddata/react-components';

import {
  projectId,
  franchiseFeesIdentifier,
  locationResortIdentifier,
  totalSalesIdentifier,
  locationStateDisplayFormIdentifier,
} from '../../../utils/fixtures';

interface HeatMapBucketProps{
  measure:any
  columns?:any;
  rows?:any;
  sortBy?:any[];
  locale?:any;
  config?:any;
  filters?:any[];
}
interface HeatMapProps {
  projectId: any;   
}

@Component({
  selector: 'app-heat-map',
  template: '<div class="heat-map" style="height:500px" [id]="rootDomID"></div>',
  // templateUrl: './heat-map.component.html',
  // styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {
  @Input() locale: any;
  @Input() config: any;
  @Input() sortBy: any[];

  xMeasures = Model.measure(totalSalesIdentifier).format("#,##0").alias("$ Total Sales")    

  xColumns = Model.attribute(locationResortIdentifier)

  xRows=Model.attribute(locationStateDisplayFormIdentifier)

  filterLocationResort=[Model.positiveAttributeFilter(locationResortIdentifier,["Irving","Montgomery","San Jose","Deerfield Beach"],true)]
  xconfig={
    //stackMeasuresToPercent:true,
    //colors: ['rgb(195, 49, 73)', 'rgb(168, 194, 86)','rgb(213, 214, 0)','rgb(65, 69, 195)'],
    //colorPalette: CUSTOM_COLOR_PALETTE,
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
  }

  public rootDomID: string;
  protected getProps(): HeatMapProps | HeatMapBucketProps {
    return {
      projectId:projectId,
      measure: this.xMeasures,
      columns:this.xColumns,
      rows:this.xRows,
      filters: this.filterLocationResort,
      sortBy:this.sortBy,
      config:this.xconfig,
      locale:this.locale,
    };
  }

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);

    return node;
  }
  constructor() { }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }
  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Heatmap, this.getProps()), this.getRootDomNode());
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
