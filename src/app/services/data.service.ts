import { Injectable } from '@angular/core';

import { studentData } from '../data/studentData';
import { groupData } from '../data/groupData';

import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  studentData: object = studentData;
  groupData: object = groupData;
  studentSubject = new BehaviorSubject(studentData);
  groupSubject = new BehaviorSubject(groupData);

  constructor() {
    // this.studentSubject.next(studentData);
  }
}
