import { Component } from "@angular/core";
import { AppService } from "app/services/app.service";

@Component({
	selector: 'app-notice',
	templateUrl: 'notice.component.html',
	styleUrls: ['notice.component.scss'],
	providers: [AppService]
})
export class NoticeComponent {
	public data: {
		Title: string;
		Content: string
	}
	public isFinishLoading = false;
	public constructor(private service: AppService) {
		service.queryNotice().subscribe(d => { this.isFinishLoading = true;this.data = d });
	}
}