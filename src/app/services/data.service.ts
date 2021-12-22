import { Injectable } from '@angular/core';

import { Student } from '../models/student';

import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  studentSubject = new BehaviorSubject<object>({});
  groupSubject = new BehaviorSubject<object>({});

  constructor(private http: HttpClient) {
    console.log('dataservice - constructor called');
    this.fetchUpdatedData();
  }

  fetchUpdatedData() {
    this.http.get('api/students').subscribe((res) => {
      console.log(
        'dataservice - constructor -- getStu http called',
        res['data']
      );
      this.studentSubject.next(res['data']);
    });
    this.http.get('api/groups').subscribe((res) => {
      console.log('dataservice - constructor -- getGro http called');
      this.groupSubject.next(res['data']);
    });
  }

  addStudent(studentDetails: Student) {
    this.http
      .post('api/add-student', { ...studentDetails })
      .subscribe((addedData) => {
        console.log('AddStudent() == addedData', addedData);
      });
  }

  editStudent(id: string, studentDetails: Student, previousGroup: string) {
    this.http
      .post(`api/edit-student/${id}`, { studentDetails, previousGroup })
      .subscribe((editedData) => {
        console.log('EditStudent() == editedData', editedData);
      });
  }

  // addGroup(newGroupDetails) {
  //   newGroupDetails = {
  //     ...newGroupDetails,
  //     members: [],
  //   };
  //   this.groupData[newGroupDetails.groupName] = newGroupDetails;
  //   this.groupData['keys'].push(newGroupDetails.groupName);
  //   console.log(this.groupData);
  //   this.groupSubject.next(this.groupData);
  // }
}
