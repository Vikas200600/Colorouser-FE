import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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
    this.dataService.groupSubject.subscribe((data) => {
      this.groupData = data;
    });
  }

  ngOnInit(): void {
    console.log('group comp - Oninit -- this.groupData', this.groupData);
  }
}
