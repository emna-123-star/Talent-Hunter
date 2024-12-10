import { Routes } from '@angular/router';

// dashboards
import { AppDashboard1Component } from './dashboard1/dashboard1.component';
import { AppDashboard2Component } from './dashboard2/dashboard2.component';
import { ListJobsComponent } from './jobs/list-jobs/list-jobs.component';
import { ListCandidatureComponent } from './candidature/list-candidature/list-candidature.component';
import { ListInterviewsComponent } from './interviews/list-interviews/list-interviews.component';
import { ListMatchmakingComponent } from './matchmaking/list-matchmaking/list-matchmaking.component';
import { ListTestsComponent } from './tests/list-tests/list-tests.component';
import { AddJobComponent } from './jobs/add-job/add-job.component';
import { EditJobComponent } from './jobs/edit-job/edit-job.component';
import { AddCandidatureComponent } from './candidature/add-candidature/add-candidature.component';

export const DashboardsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: AppDashboard1Component,
        data: {
          title: 'Analytical',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Analytical' },
          ],
        },
      },
      {
        path: 'dashboard2',
        component: AppDashboard2Component,
        data: {
          title: 'eCommerce',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'eCommerce' },
          ],
        },
      },
      //here test 
      {
        path: 'jobs',
        component: ListJobsComponent,
        data: {
          title: 'Gérer Emplois',
          urls: [
            { title: 'Job-Genie', url: '/dashboards/jobs' },
            { title: 'Liste des Emplois' },
          ],
        },
      },
      {
        path: 'add-job',
        component: AddJobComponent,
        data: {
          title: 'Ajouter Emplois',
          urls: [
            { title: 'Job-Genie', url: '/dashboards/add-job' },
            // { title: 'Liste des Emplois' },
          ],
        },
      },
      {
        path: 'edit-job/:id',
        component: EditJobComponent,
        data: {
          title: 'Modifier Emplois',
          urls: [
            { title: 'Job-Genie', url: '/dashboards/edit-job/:id' },
            // { title: 'Liste des Emplois' },
          ],
        },
      },
      {path: 'addApplication',
      component: AddCandidatureComponent,
      data: {
        title: 'Ajouter Candidature',
        urls: [
          { title: 'Job-Genie', url: '/dashboards/addApplication' },
          // { title: 'Liste des Emplois' },
        ],
      },
    },
      {
        path: 'candidature',
        component: ListCandidatureComponent,
        data: {
          title: 'Gérer Candidature',
          urls: [
            { title: 'Job-Genie', url: '/dashboards/candidature' },
            { title: 'Liste des Candidatures' },
          ],
        },
      },
      
      {
        path: 'interviews',
        component: ListInterviewsComponent,
        data: {
          title: 'Gérer  Interviews',
          urls: [
            { title: 'Job-Genie', url: '/dashboards/interviews' },
            { title: 'Liste des  Interviews' },
          ],
        },
      },
      {
        path: 'matchmaking',
        component: ListMatchmakingComponent,
        data: {
          title: 'Match Making',
          urls: [
            { title: 'Job-Genie', url: '/dashboards/matchmaking' },
            { title: 'Match Making avec l\'IA' },
          ],
        },
      },
      {
        path: 'tests',
        component: ListTestsComponent,
        data: {
          title: 'Gérer Tests',
          urls: [
            { title: 'Job-Genie', url: '/dashboards/tests' },
            { title: 'Gérer Tests' },
          ],
        },
      },
    ],
  },
];
