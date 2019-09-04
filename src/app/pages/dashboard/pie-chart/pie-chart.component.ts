import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';

import { PieChartComponent as BasePieChartComponent } from 'theme/components/pie-chart';

import { AppService } from 'app/services/app.service';

@Component({
	selector: 'app-pie-chart',
	styleUrls: ['../../../../theme/components/pie-chart/pie-chart.component.scss'],
	template: ``,
	providers: [AppService],
})
export class PieChartComponent extends BasePieChartComponent {
	constructor(
		private el: ElementRef,
		private service: AppService,
	) {
		super();
	}

	public render(data: { Status: string; Count: number; }[]) {
		const colors = [
			'#03a9f4',
			'#f44336',
			'#ff9800',
			'#ffc107',
			'#00bcd4',
			'',
		];

		const animatedData = [
			...data.map(job => ({ key: job.Status, end: job.Count, y: 0 })),
			{
				key: 'Pending',
				y: data.map(i => i.Count).reduce((i, j) => i + j),
			},
		];

		nv.addGraph(() => {
			const innerRadius = 0.86;
			const outerRadius = 1.02;

			const pieChart = nv.models.pieChart()
				.x(d => d.key)
				.y(d => d.y)
				.showLabels(false)
				.donut(true)
				.growOnHover(true)
				.padAngle(.04)
				.cornerRadius(0)
				.margin({ left: 0, right: 0, top: 0, bottom: 0 })
				.color(colors)
				.arcsRadius([{ inner: innerRadius, outer: outerRadius },
				{ inner: innerRadius, outer: outerRadius },
				{ inner: innerRadius, outer: outerRadius },
				])
				.showLegend(false)
				.title('0个隐患')
				.titleOffset(10);

			pieChart.tooltip.enabled(true)
				.hideDelay(0)
				.headerEnabled(false)
				.contentGenerator((d) => {
					if (d === null || !d.animatedData) {
						return null;
					}
					d3.selectAll('.nvtooltip').classed('mdl-tooltip', true);
					return `${d.animatedData.y} 个隐患`;
				});

			const container = d3.select(this.el.nativeElement)
				.append('div')
				.append('svg')
				.datum(animatedData)
				.transition()
				.duration(1200)
				.call(pieChart as any);

			let h = 0;
			let i = 0;
			const timer = setInterval(
				(d) => {
					if (i < d.length - 1) {
						if (d[i].y < d[i].end) {
							d[i].y += 1;
							d[d.length - 1].y -= 1;
							pieChart.title(`${h + 1} 个隐患`);
							h += 1;
						} else {
							i += 1;
						}
					} else {
						d.splice(d.length - 1, 1);
						clearInterval(timer);
						return;
					}
					if (container[0][0]) {
						pieChart.update();
					} else {
						clearInterval(timer);
					}
				},
				70,
				animatedData,
			);

			d3.select(this.el.nativeElement.querySelector('.nv-pie .nv-pie'))
				.append('image')
				.attr('width', '30')
				.attr('height', '30')
				.attr('xlink:href', 'assets/images/watch_white.svg')
				.attr('transform', 'translate(-15,-35)');

			const color = d3.scale.ordinal().range(colors);

			const legend = d3.select(this.el.nativeElement)
				.append('div')
				.attr('class', 'legend')
				.selectAll('.legend__item')
				.data(animatedData.slice(0, animatedData.length - 1))
				.enter()
				.append('div')
				.attr('class', 'legend__item');

			legend.append('div')
				.attr('class', 'legend__mark pull-left')
				.style('background-color', d => color(d.key).toString());

			legend.append('div')
				.attr('class', 'legend__text')
				.text(d => d.key);

			return pieChart;
		});
	}
}
