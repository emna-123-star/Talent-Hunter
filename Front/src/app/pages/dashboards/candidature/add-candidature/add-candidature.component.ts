import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { ApplicationService } from 'src/app/services/application.service';
import Swal from 'sweetalert2';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




@Component({
  selector: 'app-add-candidature',
  standalone: true,
  templateUrl: './add-candidature.component.html',
  styleUrl: './add-candidature.component.scss',
  imports: [MaterialModule, CommonModule, RouterModule,FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddCandidatureComponent {


  application = {
    jobId: '',
    applicantName: '',
    applicantEmail: '',
    phoneNumber: '',
    cv: null,
    coverLetter: null
  };

  constructor(private router: Router , private applicationService:ApplicationService) {}

  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      (this.application as any)[field] = event.target.files[0];
    }
  }

  addApplication() {
    const formData = new FormData();
    formData.append('jobId', this.application.jobId);
    formData.append('applicantName', this.application.applicantName);
    formData.append('applicantEmail', this.application.applicantEmail);
    formData.append('phoneNumber', this.application.phoneNumber);

    if (this.application.cv) {
      formData.append('cv', this.application.cv);
    }
    if (this.application.coverLetter) {
      formData.append('coverLetter', this.application.coverLetter);
    }

    // Call the API to submit the form
    // Example using a service:
    this.applicationService.addApplication(formData).subscribe(response => {
      console.log('Application submitted successfully');
      this.router.navigate(['/applications']);
    });
  }
}
