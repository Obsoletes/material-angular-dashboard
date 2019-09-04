import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'app/services/app.service';

@Component({
	selector: 'app-trending',
	styleUrls: ['./trending.component.scss'],
	templateUrl: './trending.component.html',
	providers: [AppService]
})
export class TrendingComponent {
	public isFinishLoading = false;
	@HostBinding('class.trending') private readonly trending = true;
	public data: { Name: string, Percent: number, Status: 'Up' | 'Down' }[];
	public constructor(private service: AppService) {
		service.queryTrending().subscribe(data => {
			this.isFinishLoading = true;
			this.data = data;
		})
	}
}
