import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';

@NgModule({
  declarations: [GroupsComponent],
  imports: [CommonModule, GroupsRoutingModule, MatCardModule],
})
export class GroupsModule {}
