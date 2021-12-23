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

  deleteStudent(id: string, house: string) {
    console.log('deleting === ', id);
    this.http
      .delete(`api/delete-student/${id}/${house}`)
      .subscribe((deletedData) => {
        console.log('deleteStudent() == deletedData', deletedData);
      });
  }

  addGroup(newGroupDetails) {
    this.http
      .post('api/add-group', { ...newGroupDetails })
      .subscribe((addedData) => {
        console.log('AddStudent() == addedData', addedData);
      });
  }
}
