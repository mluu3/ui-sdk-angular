import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit ,OnDestroy, OnChanges, AfterViewInit } from '@angular/core';

import { projectId, barVisualizationIdentifier } from "../../../utils/fixtures";
import { Visualization } from '@gooddata/react-components';

interface VisualizationBarChartProps {
  projectId: any;
  identifier:any;  
  onLoadingChanged?: (any);
  onError?: (any);
}

@Component({
  selector: 'app-visualization-bar-chart',
  template: '<div class="visualization-bar-chart" style="height:300px" [id]="rootDomID"></div>',
})
export class VisualizationBarChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() projectId: any;
  @Input() identifier: any;
  @Input() onLoadingChanged?: (any);
  @Input() onError?: (any);

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): VisualizationBarChartProps {
    return {
      projectId:projectId,
      identifier: barVisualizationIdentifier,
      onLoadingChanged:this.onLoadingChanged,
      onError:this.onError,
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Visualization, this.getProps()), this.getRootDomNode());
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
