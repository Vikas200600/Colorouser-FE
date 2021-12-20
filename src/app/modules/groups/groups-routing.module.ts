import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupformComponent } from './groupform/groupform.component';
import { GroupsComponent } from './groups.component';

const routes: Routes = [
  { path: '', component: GroupsComponent },
  { path: 'form', component: GroupformComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsRoutingModule {}
