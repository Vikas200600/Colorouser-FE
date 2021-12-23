import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-groupform',
  templateUrl: './groupform.component.html',
  styleUrls: ['./groupform.component.scss'],
})
export class GroupformComponent implements OnInit {
  groupForm: FormGroup;
  _defaultColor: '#ffffff';

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.groupForm = this.fb.group({
      groupName: ['', Validators.required],
      color: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitGroupForm() {
    this.dataService.addGroup(this.groupForm.value);
  }
}
