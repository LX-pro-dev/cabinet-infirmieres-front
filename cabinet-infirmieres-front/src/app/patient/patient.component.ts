import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/models/patient ';
import { PatientService } from '../shared/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients : Patient[] = [];

  constructor(private patientsService: PatientService) { }

  ngOnInit(): void {
    this.patientsService.getPatients().subscribe((patient : Patient[]) =>{

      this.patients = patient;

      console.log(patient);

    })

  }

}
