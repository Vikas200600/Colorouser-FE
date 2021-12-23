import { Injectable } from '@angular/core';

import { Student } from '../models/student';

import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NotifyService } from './notify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  studentSubject = new BehaviorSubject<object>({});
  groupSubject = new BehaviorSubject<object>({});

  constructor(
    private http: HttpClient,
    private notifyService: NotifyService,
    private route: Router
  ) {
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
        this.notifyService.showSuccess(
          'Student Added Successfully',
          'Complete'
        );
        this.route.navigateByUrl('/');
      });
  }

  editStudent(id: string, studentDetails: Student, previousGroup: string) {
    this.http
      .post(`api/edit-student/${id}`, { studentDetails, previousGroup })
      .subscribe((editedData) => {
        console.log('EditStudent() == editedData', editedData);
        this.notifyService.showSuccess(
          'Student Edited Successfully',
          'Complete'
        );
      });
    this.route.navigateByUrl('/');
  }

  deleteStudent(id: string, house: string) {
    console.log('deleting === ', id);
    this.http
      .delete(`api/delete-student/${id}/${house}`)
      .subscribe((deletedData) => {
        console.log('deleteStudent() == deletedData', deletedData);
        this.notifyService.showError('Student Deleted Permanently', 'Removed');
      });
  }

  addGroup(newGroupDetails: object) {
    this.http
      .post('api/add-group', { ...newGroupDetails })
      .subscribe((addedData) => {
        this.notifyService.showSuccess('Group Added Successfully', 'Complete');
        this.route.navigateByUrl('/group');
      });
  }
}
