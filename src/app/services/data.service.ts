import { Injectable } from '@angular/core';

import { studentData } from '../data/studentData';
import { groupData } from '../data/groupData';

import { Student } from '../models/student';

import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  studentData: object = studentData;
  groupData: object = groupData;
  studentSubject = new BehaviorSubject<object>(studentData);
  groupSubject = new BehaviorSubject<object>(groupData);

  constructor() {}

  addStudent(studentDetails: Student) {
    let newId = (
      Math.max(...this.studentData['keys'].map((id: string) => parseInt(id))) +
      1
    ).toString();

    studentDetails = {
      id: newId,
      profile: null,
      ...studentDetails,
    };
    this.studentData[newId] = studentDetails;
    this.studentData['keys'].push(newId);
    console.log(this.studentData);
    this.studentSubject.next(this.studentData);
  }

  addGroup(newGroupDetails) {
    newGroupDetails = {
      ...newGroupDetails,
      members: [],
    };
    this.groupData[newGroupDetails.groupName] = newGroupDetails;
    this.groupData['keys'].push(newGroupDetails.groupName);
    console.log(this.groupData);
    this.groupSubject.next(this.groupData);
  }
}
