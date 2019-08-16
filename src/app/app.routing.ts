import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { PieChartComponent } from './_components/pie-chart/pie-chart.component';
import { BarChartComponent } from './_components/bar-chart/bar-chart.component';
import { PivotTableComponent} from './_components/pivot-table/pivot-table.component';
import { ColumnChartComponent} from './_components/column-chart/column-chart.component';
import { LineChartComponent} from './_components/line-chart/line-chart.component';
import { LineChartHasSegmentByComponent} from './_components/line-chart-has-segment-by/line-chart-has-segment-by.component';
import { AreaChartComponent} from './_components/area-chart/area-chart.component';
import { AreaChart2Component} from './_components/area-chart2/area-chart2.component';
import { ComboChartComponent} from './_components/combo-chart/combo-chart.component';
import { HeatMapComponent} from './_components/heat-map/heat-map.component';
import { DonutChartComponent} from './_components/donut-chart/donut-chart.component';
import { TreemapComponent} from './_components/tree-map/tree-map.component';
import { ScatterPlotComponent} from './_components/scatter-chart/scatter-chart.component';
import { BubbleChartComponent } from './_components/bubble-chart/bubble-chart.component';
import { TableComponent } from './_components/table/table.component';
import { PivotTableTotalsComponent } from './_components/pivot-table-totals/pivot-table-totals.component';
import { VisualizationPivotTableComponent } from './_visualizations/visualization-pivot-table/visualization-pivot-table.component';
import { VisualizationAreaChartComponent} from './_visualizations/visualization-area-chart/visualization-area-chart.component';
import { VisualizationAreaChartByUriComponent} from './_visualizations/visualization-area-chart-by-uri/visualization-area-chart-by-uri.component';
import { VisualizationBarChartComponent } from './_visualizations/visualization-bar-chart/visualization-bar-chart.component';
import { VisualizationColumnChartComponent } from './_visualizations/visualization-column-chart/visualization-column-chart.component';
import { VisualizationLineChartComponent } from './_visualizations/visualization-line-chart/visualization-line-chart.component';
import { VisualizationLineChartByUriComponent } from './_visualizations/visualization-line-chart-by-uri/visualization-line-chart-by-uri.component';
import { VisualizationColumnChartByUriComponent } from './_visualizations/visualization-column-chart-by-uri/visualization-column-chart-by-uri.component';
import { MeasureSortingExampleComponent } from './_components/measure-sorting-example/measure-sorting-example.component';
import { AttributeSortingExampleComponent } from './_components/attribute-sorting-example/attribute-sorting-example.component';
import { PreviousPeriodHeadLineExampleComponent } from './_components/previous-period-headline-example/previous-period-headline-example.component';
import { SamePeriodColumnChartExampleComponent } from './_components/same-period-column-chart-example/same-period-column-chart-example.component';
import { BasicComponentsComponent } from './_routes/basic-components/basic-components.component';
import { PivotTableComponentsComponent } from './_routes/pivot-table-components/pivot-table-components.component';
import { SortingComponentsComponent } from './_routes/sorting-components/sorting-components.component';
import { TimeOverTimeComparisonComponent } from './_routes/time-over-time-comparison/time-over-time-comparison.component';
import { AttributeFilterComponentsComponent } from './_routes/attribute-filter-components/attribute-filter-components.component';
import { VisualizationComponentsComponent } from './_routes/visualization-components/visualization-components.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent},
    { path: 'pie-chart', component: PieChartComponent},
    { path: 'bar-chart', component: BarChartComponent},
    { path: 'pivot-table', component: PivotTableComponent},
    { path: 'pivot-table-totals', component: PivotTableTotalsComponent},
    { path: 'table', component: TableComponent},
    { path: 'column-chart', component: ColumnChartComponent},
    { path: 'line-chart', component: LineChartComponent},
    { path: 'line-chart-has-segment-by', component: LineChartHasSegmentByComponent},
    { path: 'area-chart', component: AreaChartComponent},
    { path: 'area-chart2', component: AreaChart2Component},
    { path: 'combo-chart', component: ComboChartComponent},
    { path: 'heat-map', component: HeatMapComponent},
    { path: 'tree-map', component: TreemapComponent},
    { path: 'donut-chart', component: DonutChartComponent},
    { path: 'scatter-plot', component: ScatterPlotComponent},
    { path: 'bubble-chart', component: BubbleChartComponent},
    { path: 'visualization-area-chart', component: VisualizationAreaChartComponent},
    { path: 'visualization-area-chart-by-uri', component: VisualizationAreaChartByUriComponent},
    { path: 'visualization-pivot-table', component: VisualizationPivotTableComponent},
    { path: 'visualization-bar-chart', component: VisualizationBarChartComponent},
    { path: 'visualization-column-chart', component: VisualizationColumnChartComponent},
    { path: 'visualization-column-chart-by-uri', component: VisualizationColumnChartByUriComponent},
    { path: 'visualization-line-chart', component: VisualizationLineChartComponent},
    { path: 'visualization-line-chart-by-uri', component: VisualizationLineChartByUriComponent},
    { path: 'measure-sorting', component: MeasureSortingExampleComponent},
    { path: 'attribute-sorting', component: AttributeSortingExampleComponent},
    { path: 'previous-period-headline-example', component: PreviousPeriodHeadLineExampleComponent},    
    { path: 'same-period-column-chart-example', component: SamePeriodColumnChartExampleComponent},
    { path: 'basic-components', component: BasicComponentsComponent},
    { path: 'pivot-table-components', component: PivotTableComponentsComponent},
    { path: 'sorting-components', component: SortingComponentsComponent},
    { path: 'time-over-time-comparison', component: TimeOverTimeComparisonComponent},
    { path: 'attribute-filter-components', component: AttributeFilterComponentsComponent},
    { path: 'visualization-components', component: VisualizationComponentsComponent},
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);