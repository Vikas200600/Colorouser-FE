import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { MatDialog } from '@angular/material/dialog';

import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentcard',
  templateUrl: './studentcard.component.html',
  styleUrls: ['./studentcard.component.scss'],
})
export class StudentcardComponent implements OnInit {
  studentData: object;

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private route: Router,
    public dialog: MatDialog
  ) {
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

  openDialog(id: string, house: string) {
    const dialogRef = this.dialog.open(ConfirmdialogComponent);
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.dataService.deleteStudent(id, house);
      }
      this.dataService.fetchUpdatedData();
    });
  }
}
