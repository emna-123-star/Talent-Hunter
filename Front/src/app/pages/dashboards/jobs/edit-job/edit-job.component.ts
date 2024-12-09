import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { JobService } from 'src/app/services/job.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-job',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterModule,FormsModule],
  templateUrl: './edit-job.component.html',
  styleUrl: './edit-job.component.scss'
})
export class EditJobComponent implements OnInit {
  jobId: string;
  job: any = {};  // This will hold the job details

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    this.route.params.subscribe((params) => {
      this.jobId = params['id'];
      // Fetch job details by ID
      this.getJobDetails();
    });
  }

  // Fetch job details by ID
  getJobDetails(): void {
    this.jobService.getJobById(this.jobId).subscribe(
      (data) => {
        this.job = data;  // Fill the form with the existing job data
        console.log('Job data:', this.job); // Check if keywords and requirements are present
      },
      (error) => {
        console.error('Error fetching job details', error);
      }
    );
  }

  // Update job
  updateJob(jobForm: NgForm): void {
    if (jobForm.valid) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to update this job?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, update it!',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          // Call the service to update the job
          this.jobService.editJob(this.jobId, this.job).subscribe(
            (response) => {
              Swal.fire({
                icon: 'success',
                title: 'Job Updated!',
                text: 'The job has been successfully updated.',
              }).then(() => {
                // Redirect to the list of jobs
                this.router.navigate(['/dashboards/jobs']);
              });
            },
            (error) => {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'There was an error updating the job. Please try again.',
              });
            }
          );
        } else {
          // If the user cancels, redirect back to the list
          this.router.navigate(['/dashboards/jobs']);
        }
      });
    }
  }
}