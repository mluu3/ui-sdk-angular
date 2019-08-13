import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { KpiComponent } from './_components/kpi/kpi.component';
import { PivotTableComponent } from './_components/pivot-table/pivot-table.component';
import { PieChartComponent } from './_components/pie-chart/pie-chart.component';
import { BarChartComponent } from './_components/bar-chart/bar-chart.component';
import { ColumnChartComponent } from './_components/column-chart/column-chart.component';
import { LineChartComponent } from './_components/line-chart/line-chart.component';
import { LineChartHasSegmentByComponent } from './_components/line-chart-has-segment-by/line-chart-has-segment-by.component';
import { AreaChartComponent } from './_components/area-chart/area-chart.component';
import { AreaChart2Component } from './_components/area-chart2/area-chart2.component';
import { ComboChartComponent } from './_components/combo-chart/combo-chart.component';
import { HeatMapComponent } from './_components/heat-map/heat-map.component';
import { DonutChartComponent } from './_components/donut-chart/donut-chart.component';
import { TreemapComponent } from './_components/tree-map/tree-map.component';
import { BubbleChartComponent } from './_components/bubble-chart/bubble-chart.component';
import { ScatterPlotComponent } from './_components/scatter-chart/scatter-chart.component';
import { DualColumnChartComponent } from './_components/dual-column-chart/dual-column-chart.component';
import { HeadlineComponent } from './_components/headline/headline.component';
import { TableComponent } from './_components/table/table.component';
import { PivotTableTotalsComponent } from './_components/pivot-table-totals/pivot-table-totals.component';
import { VisualizationAreaChartComponent } from './_visualizations/visualization-area-chart/visualization-area-chart.component';
import { VisualizationAreaChartByUriComponent } from './_visualizations/visualization-area-chart-by-uri/visualization-area-chart-by-uri.component';
import { VisualizationPivotTableComponent } from './_visualizations/visualization-pivot-table/visualization-pivot-table.component';
import { VisualizationPivotTableByUriComponent } from './_visualizations/visualization-pivot-table-by-uri/visualization-pivot-table-by-uri.component';
import { VisualizationColumnChartByUriComponent } from './_visualizations/visualization-column-chart-by-uri/visualization-column-chart-by-uri.component';
import { VisualizationColumnChartComponent } from './_visualizations/visualization-column-chart/visualization-column-chart.component';
import { VisualizationBarChartComponent } from './_visualizations/visualization-bar-chart/visualization-bar-chart.component';
import { VisualizationBarChartByUriComponent } from './_visualizations/visualization-bar-chart-by-uri/visualization-bar-chart-by-uri.component';
import { VisualizationLineChartComponent } from './_visualizations/visualization-line-chart/visualization-line-chart.component';
import { VisualizationLineChartByUriComponent } from './_visualizations/visualization-line-chart-by-uri/visualization-line-chart-by-uri.component';
import { MeasureSortingExampleComponent } from './_components/measure-sorting-example/measure-sorting-example.component';
import { AttributeSortingExampleComponent } from './_components/attribute-sorting-example/attribute-sorting-example.component';
import { SamePeriodColumnChartExampleComponent } from './_components/same-period-column-chart-example/same-period-column-chart-example.component';
import { PreviousPeriodColumnChartExampleComponent } from './_components/previous-period-column-chart-example/previous-period-column-chart-example.component';
import { PreviousPeriodHeadLineExampleComponent } from './_components/previous-period-headline-example/previous-period-headline-example.component';
import { AttributeFilterExampleComponent } from './_components/attribute-filter-example/attribute-filter-example.component';
import { AttributeFilterComponent } from './_components/attribute-filter/attribute-filter.component';
import { AttributeFilterExample2Component } from './_components/attribute-filter-example2/attribute-filter-example2.component';
import { BasicComponentsComponent } from './_routes/basic-components/basic-components.component';
import { VisualizationComponentsComponent } from './_routes/visualization-components/visualization-components.component';
import { PivotTableComponentsComponent } from './_routes/pivot-table-components/pivot-table-components.component';
import { SortingComponentsComponent } from './_routes/sorting-components/sorting-components.component';
import { TimeOverTimeComparisonComponent } from './_routes/time-over-time-comparison/time-over-time-comparison.component';
import { AttributeFilterComponentsComponent } from './_routes/attribute-filter-components/attribute-filter-components.component';
import { TableDrillExampleComponent } from './_components/table-drill-example/table-drill-example.component'


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        KpiComponent ,
        PivotTableComponent ,
        TableComponent,
        PieChartComponent ,
        BarChartComponent ,
        ColumnChartComponent,
        LineChartComponent,
        LineChartHasSegmentByComponent,
        AreaChartComponent,
        AreaChart2Component,
        ComboChartComponent,
        HeatMapComponent,
        DonutChartComponent,
        TreemapComponent,
        HeadlineComponent,
        DualColumnChartComponent,
        ScatterPlotComponent,
        BubbleChartComponent,
        VisualizationPivotTableComponent,
        VisualizationAreaChartComponent,
        VisualizationAreaChartByUriComponent,
        VisualizationPivotTableByUriComponent,
        VisualizationColumnChartByUriComponent,
        VisualizationColumnChartComponent ,
        VisualizationBarChartComponent ,
        VisualizationBarChartByUriComponent,
        VisualizationLineChartComponent,
        VisualizationLineChartByUriComponent,
        PivotTableTotalsComponent,
        MeasureSortingExampleComponent,
        AttributeSortingExampleComponent,
        SamePeriodColumnChartExampleComponent,
        PreviousPeriodHeadLineExampleComponent,
        PreviousPeriodColumnChartExampleComponent,
        AttributeFilterExampleComponent,
        AttributeFilterComponent,
        AttributeFilterExample2Component,
        BasicComponentsComponent,
        PivotTableComponentsComponent,
        VisualizationComponentsComponent,
        SortingComponentsComponent,
        AttributeFilterComponentsComponent,
        TimeOverTimeComparisonComponent,
        TableDrillExampleComponent,],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        CookieService,

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})


export class AppModule { }