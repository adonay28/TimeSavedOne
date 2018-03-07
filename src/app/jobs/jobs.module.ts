import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActiveJobsComponent } from "./active_jobs.component";

@NgModule({
    declarations: [
      ActiveJobsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'jobs', component: ActiveJobsComponent}
        ])
    ],
    providers:[
    ]
})

export class JobsModule {

}