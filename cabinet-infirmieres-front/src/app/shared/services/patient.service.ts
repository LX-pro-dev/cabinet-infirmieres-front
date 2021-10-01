import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient ';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patientsSubject: BehaviorSubject<Patient[]> = new BehaviorSubject<Patient[]>(<Patient[]>[]);

  patientObds: Observable<Patient[]> = this.patientsSubject.asObservable();



  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.url}/patients`);
  }

  refreshUsers(): void {
    this.http.get<Patient[]>(`${environment.url}/patients`)
    .subscribe((patients:Patient[])=>{
      this.patientsSubject.next(patients);
    })
  }

  postPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${environment.url}/patients`, patient);
  }
  
  putPatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${environment.url}/patients/${patient.id}`,patient);
  }
  
  delPatient(patient:Patient): Observable<any> {
    return this.http.delete(`${environment.url}/patients/${patient.id}`);
  }
}

