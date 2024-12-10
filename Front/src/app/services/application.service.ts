import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private baseUrl = 'http://localhost:3001/api'; // Adjust to your backend URL

  constructor(private http: HttpClient) {}

  // Add a new application
  addApplication(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/job-applications`, formData);
  }

  // Get all applications
  getAllApplications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/job-applications`);
  }

  // Get applications by user email or job ID
  getApplicationsByEmailOrId(email?: string, id?: string): Observable<any[]> {
    const params: any = {};
    if (email) params.email = email;
    if (id) params.id = id;

    return this.http.get<any[]>(`${this.baseUrl}/job-applications/my`, {
      params,
    });
  }
}
