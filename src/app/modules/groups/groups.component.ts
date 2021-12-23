import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  groupData: object = {};

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {
    this.dataService.fetchUpdatedData();
    this.getGroupsData();
  }

  ngOnInit(): void {
    console.log('group comp - Oninit -- this.groupData', this.groupData);
  }

  getGroupsData() {
    this.dataService.groupSubject.subscribe((chatData: object) => {
      this.groupData = chatData;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
  }
}
