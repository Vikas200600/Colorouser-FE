import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-groupform',
  templateUrl: './groupform.component.html',
  styleUrls: ['./groupform.component.scss'],
})
export class GroupformComponent implements OnInit {
  groupForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.groupForm = this.fb.group({
      groupName: [''],
      color: [''],
    });
  }

  ngOnInit(): void {}

  submitGroupForm() {
    this.dataService.addGroup(this.groupForm.value);
  }
}
