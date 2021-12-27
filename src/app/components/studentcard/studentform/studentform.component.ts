import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss'],
})
export class StudentformComponent implements OnInit {
  studentForm: FormGroup;
  groupData: object = {};
  groupList: string[];
  bloodGroupsList: string[] = [
    'A+',
    'O+',
    'B+',
    'AB+',
    'A-',
    'O-',
    'B-',
    'AB-',
  ];
  action: string = 'Add';
  editStudent: object = {};
  params: string[] = this.route.url.split('/').slice(1);
  editStudentPreviousHouse: string;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private http: HttpClient,
    private route: Router
  ) {
    this.studentForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      mobile: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      class: ['', Validators.required],
      house: ['', Validators.required],
      color: [''],
      bloodGroup: ['', Validators.required],
    });
    this.dataService.groupSubject.subscribe((data) => {
      console.log('studentForm subs ', data);
      this.groupData = data;
      this.groupList = this.groupData['keys'];
    });
  }

  ngOnInit(): void {
    if (this.params[0] === 'edit-student') {
      this.action = 'Edit';
      this.http
        .get(`api/students/${this.params[1]}`)
        .subscribe((student: object) => {
          this.studentForm.patchValue(student['data']);
          this.editStudentPreviousHouse = this.studentForm.value.house;
        });
    }
  }

  setColor() {
    this.studentForm.value.color =
      this.groupData[this.studentForm.value.house].color;
  }

  submitStudentData() {
    if (this.params[0] === 'edit-student') {
      this.dataService.editStudent(
        this.params[1],
        this.studentForm.value,
        this.editStudentPreviousHouse
      );
    } else {
      this.dataService.addStudent(this.studentForm.value);
    }
  }
}
