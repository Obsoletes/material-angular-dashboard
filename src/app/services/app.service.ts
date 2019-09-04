import { of, Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { Injectable } from "@angular/core";
@Injectable({
	providedIn: 'root'
})
export class AppService {
	public queryNotice() {
		return of({
			Title: '9月7日-8日教学C楼封楼通知',
			Content: '2019年9月7日-8日（周六、周日）8:00 ～17:00将进行2019/2020学年第一学期集中补考，考试期间教学C楼将封闭。该时间段在教学C楼有教学活动的教师和学生，请提前做好相关调整工作。'
		}).pipe(delay(5000))
	}
	public queryTrending(): Observable<{ Name: string, Percent: number, Status: 'Up' | 'Down' }[]> {
		return of([{
			Name: '部门1',
			Percent: Math.ceil(Math.random() * 100),
			Status: 'Up' as 'Up' | 'Down'
		}, {
			Name: '部门2',
			Percent: Math.ceil(Math.random() * 100),
			Status: 'Down' as 'Up' | 'Down'
		}, {
			Name: '部门3',
			Percent: Math.ceil(Math.random() * 100),
			Status: 'Up' as 'Up' | 'Down'
		}, {
			Name: '部门4',
			Percent: Math.ceil(Math.random() * 100),
			Status: 'Down' as 'Up' | 'Down'
		}, {
			Name: '部门5',
			Percent: Math.ceil(Math.random() * 100),
			Status: 'Up' as 'Up' | 'Down'
		}]).pipe(delay(5000))
	}
	public queryReportCount() {
		return of([
			{
				Status: '处理中',
				Count: Math.ceil(Math.random() * 100),
			},
			{
				Status: '已完成',
				Count: Math.ceil(Math.random() * 100),
			},
			{
				Status: '已退回',
				Count: Math.ceil(Math.random() * 100),
			}
		]).pipe(delay(5000))
	}
	public queryDailyChange() {
		return of([new Array<any>(60).fill(1).map((_, i) => ({
			x: i,
			y: Math.ceil(Math.random() * 200)
		})),new Array<any>(60).fill(1).map((_, i) => ({
			x: i,
			y: Math.ceil(Math.random() * 200)
		})),new Array<any>(60).fill(1).map((_, i) => ({
			x: i,
			y: Math.ceil(Math.random() * 200)
		}))]).pipe(delay(5000))
	}
}