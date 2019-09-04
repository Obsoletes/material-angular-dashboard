import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeModule } from 'theme';

import { DashboardComponent } from './dashboard.component';
import { ReportCountComponent } from './report-count';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TrendingComponent } from './trending';
import { NoticeComponent } from './notice';
import { LoadingComponent } from 'app/components/loading/loading.component';
import { DailyChangeComponent } from './daily-change';
import { AppCommonModule } from 'app/app-common.module';

@NgModule({
	
	imports: [
		CommonModule,
		ThemeModule,
		AppCommonModule
	],
	declarations: [
		DashboardComponent,
		ReportCountComponent,
		PieChartComponent,
		TrendingComponent,
		NoticeComponent,
		DailyChangeComponent
	],
})
export class DashboardModule { }
