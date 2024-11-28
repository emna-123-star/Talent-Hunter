import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardsRoutes } from './dashboards.routing';

import { AppDashboard1Component } from './dashboard1/dashboard1.component';
import { AppDashboard2Component } from './dashboard2/dashboard2.component';
import { ListJobsComponent } from './jobs/list-jobs/list-jobs.component';
import { ListCandidatureComponent } from './candidature/list-candidature/list-candidature.component';
import { ListMatchmakingComponent } from './matchmaking/list-matchmaking/list-matchmaking.component';
import { ListInterviewsComponent } from './interviews/list-interviews/list-interviews.component';
import { ListTestsComponent } from './tests/list-tests/list-tests.component';
import { AddJobComponent } from './jobs/add-job/add-job.component';
import { EditJobComponent } from './jobs/edit-job/edit-job.component';

@NgModule({
  imports: [
    RouterModule.forChild(DashboardsRoutes),
    AppDashboard1Component,
    AppDashboard2Component,
    ListJobsComponent,
    AddJobComponent,
    EditJobComponent,
    ListCandidatureComponent,
    ListMatchmakingComponent,
    ListInterviewsComponent,
    ListTestsComponent
    
  ],
})
export class DashboardsModule {}
