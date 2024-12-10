import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { ApplicationService } from 'src/app/services/application.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-list-candidature',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterModule],
  templateUrl: './list-candidature.component.html',
  styleUrl: './list-candidature.component.scss'
})
export class ListCandidatureComponent  implements OnInit {
  applications: any[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit(): void {
    this.fetchApplications();
  }

  fetchApplications(): void {
    this.applicationService.getAllApplications().subscribe({
      next: (data) => {
        this.applications = data;
      },
      error: (err) => {
        Swal.fire('Error', 'Failed to fetch applications.', 'error');
      },
    });
  }
}
