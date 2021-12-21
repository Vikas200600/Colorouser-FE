import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-studentcard',
  templateUrl: './studentcard.component.html',
  styleUrls: ['./studentcard.component.scss'],
})
export class StudentcardComponent implements OnInit {
  studentData: object;

  constructor(private dataService: DataService) {
    this.dataService.studentSubject.subscribe((data: object) => {
      this.studentData = data;
    });
  }

  ngOnInit(): void {
    console.log(
      'studentcard comp - Oninit -- this.studentdata',
      this.studentData
    );
  }
}
