import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the Job model to structure the job data
export interface Job {
  jobId: string;
  jobName: string;
  description: string;
  keywords: string[];
  requirements: string[];
  position: string;
  startDate: string;
  deadline: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://localhost:3001/api/jobs'; // Your API base URL

  constructor(private http: HttpClient) {}

  // Get all jobs
  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  // Get a job by ID
  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  // Add a new job
  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }

  // Edit a job by ID
  editJob(id: string, job: Job): Observable<Job> {
    return this.http.put<Job>(`${this.apiUrl}/${id}`, job);
  }

  // Delete a job by ID
  deleteJob(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
