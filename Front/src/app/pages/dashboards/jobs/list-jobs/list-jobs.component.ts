import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { JobService } from 'src/app/services/job.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'; // Import SweetAlert

@Component({
  selector: 'app-list-jobs',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterModule],
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.scss'],
 
})
export class ListJobsComponent implements OnInit {
  displayedColumns: string[] = ['jobName', 'description', 'position', 'startDate', 'deadline', 'actions'];
  dataSource: any;

  constructor(public jobService: JobService) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobService.getAllJobs().subscribe((data: any) => {
      console.log("Jobs: ", data);
      this.dataSource = data;
    });
  }

  deleteJob(jobId: any) {
    // Show a confirmation alert
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this job!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the delete service if confirmed
        this.jobService.deleteJob(jobId).subscribe(
          (response) => {
            // Show success alert after deletion
            Swal.fire('Deleted!', 'The job has been deleted.', 'success');
            // Refresh the job list after deletion
            this.loadJobs();
          },
          (error) => {
            // Show error alert if deletion fails
            Swal.fire('Error!', 'There was an error deleting the job. Please try again.', 'error');
          }
        );
      } else {
        // Show cancellation message if user clicks "Cancel"
        Swal.fire('Cancelled', 'The job was not deleted.', 'info');
      }
    });
  }
  editJob(jobId: any): void {
    console.log('Edit Job:', jobId);
  }

  viewDetails(jobId: any): void {
    // Fetch job details based on the jobId
    this.jobService.getJobById(jobId).subscribe((data: any) => {
      // Show SweetAlert with job details
      Swal.fire({
        title: data.jobName,
        html: `
          <p><strong>Position:</strong> ${data.position}</p>
          <p><strong>Description:</strong> ${data.description}</p>
          <p><strong>Start Date:</strong> ${this.formatDate(data.startDate)}</p>
          <p><strong>Deadline:</strong> ${this.formatDate(data.deadline)}</p>
          <p><strong>Keywords:</strong> ${data.keywords}</p>
          <p><strong>Requirements:</strong> ${data.requirements}</p>
        `,
        icon: 'info',
        confirmButtonText: 'Close',
        confirmButtonColor: '#3085d6',
      });
    });
  }



  formatDate(date: string): string {
    return date ? new Date(date).toLocaleDateString('en-US') : 'No date available';
  }

  // Method to format deadline
  formatDeadline(deadline: string): string {
    return deadline ? new Date(deadline).toLocaleDateString('en-US') : 'No deadline available';
  }
}
