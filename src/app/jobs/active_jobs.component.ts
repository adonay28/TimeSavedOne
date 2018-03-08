import { Component, OnInit } from '@angular/core';
import { JobsService } from "./jobs.service";
import { IOption } from 'ng-select';

@Component({
  moduleId: module.id,
  templateUrl: './active_jobs.component.html',
  styleUrls: ['./active_jobs.component.css']
})
export class ActiveJobsComponent implements OnInit {
  private job_activity: any = {};
  constructor(private jobService: JobsService) { }

  myOptions: Array<IOption> = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ];
  ngOnInit() {
    this.jobService.get_worker_activiy()
      .subscribe(data => {
        if (data.job_activity && data.job_activity.length > 0) {
          this.job_activity = data.job_activity[0];
          this.job_activity.status.sort(function (a, b) {
            return new Date(a.date) < new Date(b.date);
          })
          this.job_activity.status = this.job_activity.status.filter(function (item) {
            item.date = new Date(item.date);
            var am_pm_value = "am";
            var hour_value = item.date.getHours();
            if(hour_value > 12){
              am_pm_value = "pm"
              hour_value = hour_value - 12;
            }
            item.date = hour_value + ":" + item.date.getMinutes() + ":" + item.date.getSeconds() + " " + am_pm_value;
            return item;
          })
        }
        console.log("data", this.job_activity);

      });
  }
}