import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { JobService } from 'src/app/services/job.service';
import Swal from 'sweetalert2';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({

  standalone: true,
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss'],
  imports: [MaterialModule, CommonModule, RouterModule,FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddJobComponent implements OnInit {
  job = {
    jobId: '',
    jobName: '',
    position: '',
    description: '',
    startDate: '',
    deadline: '',
    keywords: [] as string[], // Array of keywords
    requirements: [] as string[], // Array of requirements
  };

  keywordsInput = ''; // For keywords input
  requirementsInput = ''; // For requirements input

  constructor(private jobService: JobService,private router: Router) {}

  ngOnInit(): void {}

  onKeywordsChange() {
    this.job.keywords = this.keywordsInput.split(',').map((keyword) => keyword.trim());
  }

  onRequirementsChange() {
    this.job.requirements = this.requirementsInput.split(',').map((requirement) => requirement.trim());
  }
  


  addJob() {
    this.jobService.addJob(this.job).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Job Added!',
          text: 'The job was added successfully.',
        }).then(() => {
          // Reset the form data
          this.job = {
            jobId: '',
            jobName: '',
            position: '',
            description: '',
            startDate: '',
            deadline: '',
            keywords: [],
            requirements: []
          };
          // Redirect to the job list page
          this.router.navigate(['/dashboards/jobs']);
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'There was an error adding the job. Please try again.',
        });
      }
    );
  }


  // addJob() {
  //   this.jobService.addJob(this.job).subscribe(
  //     (response) => {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Job Added!',
  //         text: 'The job was added successfully.',
  //       });
  //     },
  //     (error) => {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Error!',
  //         text: 'There was an error adding the job. Please try again.',
  //       });
  //     }
  //   );
  // }
}
