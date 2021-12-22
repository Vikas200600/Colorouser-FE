import { Injectable } from '@angular/core';

import { Student } from '../models/student';

import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  studentSubject = new Subject<object>();
  groupSubject = new Subject<object>();

  constructor(private http: HttpClient) {
    console.log('dataservice - constructor called');
    this.http.get('api/students').subscribe((res) => {
      console.log('dataservice - constructor -- getStu http called');
      this.studentSubject.next(res['data']);
    });
    this.http.get('api/groups').subscribe((res) => {
      console.log('dataservice - constructor -- getGro http called');
      this.groupSubject.next(res['data']);
    });
  }

  // getAllStudents(): object {
  //   let studentData: object;
  //   this.http.get('api/students').subscribe((res) => {
  //     console.log('dataservice - getAllStudents() -- getStu http called');
  //     studentData = res['data'];
  //     // this.studentSubject.next(res['data']);
  //   });
  //   return studentData;
  // }

  // addStudent(studentDetails: Student) {
  //   let newId = (
  //     Math.max(...this.studentData['keys'].map((id: string) => parseInt(id))) +
  //     1
  //   ).toString();

  //   studentDetails = {
  //     id: newId,
  //     profile: null,
  //     ...studentDetails,
  //   };
  //   this.studentData[newId] = studentDetails;
  //   this.studentData['keys'].push(newId);
  //   console.log(this.studentData);
  //   this.studentSubject.next(this.studentData);
  // }

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
