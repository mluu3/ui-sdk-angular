import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { LineChart, AttributeFilter, Model } from '@gooddata/react-components';


import { 
    totalSalesIdentifier,
    locationResortIdentifier,
    locationResortUri,
    projectId,

} from "../../../utils/fixtures";

interface AttributeFilterBucketProps {
  projectId:any;
  identifier:any;
  fullscreenOnMobile:boolean;
  onApply:any;
}
interface AttributeFilterProps {
  projectId: any;
  fullscreenOnMobile:boolean;
  onApply:any;
}

interface AttributeFilterExampleBucketProps {
  measures:any[];
  trendBy?:any;
  filters?:any[];
  onLoadingChanged?:any;
  onError?:any;
}
interface AttributeFilterExampleProps {
  projectId: any;
}

@Component({
  selector: 'app-attribute-filter-example',
  template: '<div class="app-attribute-filter-example" style="height:200px" [id]="rootDomID"></div>',
})


export class AttributeFilterExampleComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() projectId:any;
  @Input() fullscreenOnMobile:boolean;
  @Input() filters:any[];


  totalSales =[Model.measure(totalSalesIdentifier).format("#,##0").alias("$ Total Sales")]
  locationResort = Model.attribute(locationResortIdentifier)  
  setState: any;
   
  
  onLoadingChanged(...params) {
    // eslint-disable-next-line no-console
    console.info("AttributeFilterExampleComponent onLoadingChanged", ...params);
  }
  onApply(filter) {
    // eslint-disable-next-line no-console
    console.log("AttributeFilterExampleComponent onApply", filter);
    this.setState({ filters: [], error: null });
    if (filter.in) {
        this.filterPositiveAttribute(filter);
    } else {
        this.filterNegativeAttribute(filter);
    }
  }
  
  onError(...params) {
    // eslint-disable-next-line no-console
    console.info("AttributeFilterExample onLoadingChanged", ...params);
  }
 filterPositiveAttribute(filter) {
  let filters;
  if (filter.in.length !== 0) {
      filters = [
          {
              positiveAttributeFilter: {
                  displayForm: {
                      identifier: filter.id,
                  },
                  in: filter.in.map(element => `${locationResortUri}/elements?id=${element}`),
              },
          },
      ];
  } 
  this.setState(filters);
}

filterNegativeAttribute(filter) {
  let filters;
  if (filter.notIn.length !== 0) {
      filters = [
          {
              negativeAttributeFilter: {
                  displayForm: {
                      identifier: filter.id,
                  },
                  notIn: filter.notIn.map(element => `${locationResortUri}/elements?id=${element}`),
              },
          },
      ];
  }
  this.setState(filters);
  }

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getPropsFilter(): AttributeFilterProps | AttributeFilterBucketProps {
    
    return {
      projectId:projectId,
      identifier:this.locationResort,      
      onApply:this.onApply,
      fullscreenOnMobile:false,
    };
  }
  protected getPropsLineChart(): AttributeFilterExampleProps | AttributeFilterExampleBucketProps {
    return {      
      projectId:projectId,
      measures:this.totalSales,
      trendBy:this.locationResort,
      filters:this.filters,
      onLoadingChanged:this.onLoadingChanged,
      onError:this.onError,
    };
  }
  
  private isMounted(): boolean {
    return !!this.rootDomID;
  }
  protected render() {
    if (this.isMounted()) {      
      ReactDOM.render(React.createElement(AttributeFilter, this.getPropsFilter()),this.getRootDomNode())      
    }
    
  }
  protected renderLineChart() {
    if (this.isMounted()) {      
      ReactDOM.render(React.createElement(LineChart, this.getPropsLineChart()),this.getRootDomNode())      
    }
    
  }
  ngOnInit() {
    this.rootDomID = uuid.v1();
  }

  ngOnChanges() {
    this.render();
    this.renderLineChart();
  }

  ngAfterViewInit() {
    this.render();
    this.renderLineChart();
  }
  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }

}

