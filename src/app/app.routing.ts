import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {PivotTableComponent} from './pivot-table/pivot-table.component';
import {ColumnChartComponent} from './column-chart/column-chart.component';
import {VisualizationAreaChartComponent} from './visualization-area-chart/visualization-area-chart.component';
import {VisualizationAreaChartByUriComponent} from './visualization-area-chart-by-uri/visualization-area-chart-by-uri.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent},
    { path: 'pie-chart', component: PieChartComponent},
    { path: 'bar-chart', component: BarChartComponent},
    { path: 'pivot-table', component: PivotTableComponent},
    { path: 'column-chart', component: ColumnChartComponent},
    { path: 'visualization-area-chart', component: VisualizationAreaChartComponent},
    { path: 'visualization-area-chart-by-uri', component: VisualizationAreaChartByUriComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);