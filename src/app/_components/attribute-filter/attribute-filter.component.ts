import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { AttributeFilter } from '@gooddata/react-components';

import { locationResortIdentifier, projectId} from "../../../utils/fixtures";

interface AttributeFilterBucketProps {
  identifier:any;
  fullscreenOnMobile:boolean;
  onApply:any;
}
interface AttributeFilterProps {
  projectId: any;
  fullscreenOnMobile:boolean;
  onApply:any;
}

@Component({
  selector: 'app-attribute-filter',
  template: '<div class="attribute-filter" style="height:200px" [id]="rootDomID"></div>',
})
export class AttributeFilterComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() projectId:any;
  @Input() fullscreenOnMobile:boolean;
 
  onApply(...params) {
    // eslint-disable-next-line no-console
    console.log("AttributeFilterComponentExample onApply", ...params);
  }

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }
  protected getProps(): AttributeFilterProps | AttributeFilterBucketProps {
    return {
      projectId:projectId,
      identifier:locationResortIdentifier,
      onApply:this.onApply,
      fullscreenOnMobile:false,
    };
  }
  
  private isMounted(): boolean {
    return !!this.rootDomID;
  }
  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(AttributeFilter, this.getProps()), this.getRootDomNode());
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
