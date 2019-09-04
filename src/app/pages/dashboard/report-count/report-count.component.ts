import { Component, ViewChild } from "@angular/core";
import { AppService } from "app/services/app.service";
import { PieChartComponent } from "../pie-chart/pie-chart.component";

@Component({
	selector: 'app-report-count',
	templateUrl: 'report-count.component.html'
})
export class ReportCountComponent {
	public isFinishLoading = false;
	@ViewChild(PieChartComponent, { static: false }) chart: PieChartComponent;
	public constructor(private service: AppService) {
		service.queryReportCount().subscribe(data => {
			this.isFinishLoading = true;
			this.chart.render(data)
		})
	}
}