import { Component, ViewChild, ViewChildren, ElementRef } from "@angular/core";
import { AppService } from "app/services/app.service";
import * as nv from 'nvd3';
import * as d3 from 'd3';

@Component({
	selector: 'app-daily-change',
	templateUrl: 'daily-change.component.html',
	providers: [AppService]
})
export class DailyChangeComponent {
	public constructor(private service: AppService, private el: ElementRef) {
		//service.queryDailyChange().subscribe(this.chart.render);
	}
	ngAfterViewInit(): void {
		this.service.queryDailyChange().subscribe(data => {
			let chart = nv.models.lineChart()
				.margin({ left: 100 })
				.useInteractiveGuideline(true)
				.duration(350)
				.showLegend(true)
				.showYAxis(true)
				.showXAxis(true);

			chart.xAxis.axisLabel('Time (ms)')
			chart.yAxis.axisLabel('Voltage (v)')
			var myData = [
				{
					values: data[0],      //values - represents the array of {x,y} data points
					key: 'Sine Wave', //key  - the name of the series.
					color: '#00bcd4'  //color - optional: choose your own line color.
				},
				{
					values: data[1],
					key: 'Cosine Wave',
					color: '#f44336'
				},
				{
					values: data[2],
					key: 'Another sine wave',
					color: '#ffc107',
					fillOpacity: 0.00001,
					area: true      //area - set to true if you want this line to turn into a filled area chart.
				}
			];
			console.dir(myData)
			//Finally, render the chart!
			d3.select((this.el.nativeElement as HTMLElement).querySelector('svg')).datum(myData)         //Populate the <svg> element with chart data...
				.call(chart);
			//Update the chart when window resizes.
			nv.utils.windowResize(function () { chart.update() });
			return chart;
		});
	}
}