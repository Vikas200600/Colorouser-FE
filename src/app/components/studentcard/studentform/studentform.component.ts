import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

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

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private route: Router
  ) {
    this.studentForm = this.fb.group({
      name: ['Vikas', Validators.required],
      mobile: [
        '9090909090',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      class: ['10C', Validators.required],
      house: ['', Validators.required],
      bloodGroup: ['O+', Validators.required],
    });
    this.dataService.groupSubject.subscribe((data) => {
      this.groupData = data;
      this.groupList = this.groupData['keys'];
    });
    if (this.route.url.split('/').slice(1)[0] === 'edit-student')
      this.studentForm.patchValue({});
  }

  ngOnInit(): void {}

  setColor() {
    this.studentForm.value.color =
      this.groupData[this.studentForm.value.house].color;
  }

  submitStudentData() {
    this.dataService.addStudent(this.studentForm.value);
  }
}
