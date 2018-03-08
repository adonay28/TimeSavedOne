import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActiveJobsComponent } from "./active_jobs.component";
import { JobsService } from "./jobs.service";
import { SelectModule } from 'ng-select';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
      ActiveJobsComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: 'jobs', component: ActiveJobsComponent}
        ]),
        SelectModule,
        BrowserModule
    ],
    providers:[
        JobsService
    ]
})

export class JobsModule {

}