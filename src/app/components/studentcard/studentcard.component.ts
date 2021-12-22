import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-studentcard',
  templateUrl: './studentcard.component.html',
  styleUrls: ['./studentcard.component.scss'],
})
export class StudentcardComponent implements OnInit {
  studentData: object;

  constructor(private dataService: DataService, private http: HttpClient) {
    console.log('studentcard comp - constructor called');
    this.dataService.fetchUpdatedData();
    this.getStudentsData();
  }

  ngOnInit(): void {
    console.log(
      'studentcard comp - Oninit -- this.studentdata',
      this.studentData
    );
  }

  getStudentsData() {
    this.dataService.studentSubject.subscribe((data: object) => {
      this.studentData = data;
    });
  }
}
