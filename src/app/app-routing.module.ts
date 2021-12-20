import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentcardComponent } from './components/studentcard/studentcard.component';
import { StudentformComponent } from './components/studentcard/studentform/studentform.component';

const routes: Routes = [
  { path: '', component: StudentcardComponent },
  { path: 'form', component: StudentformComponent },
  {
    path: 'group',
    loadChildren: () =>
      import('./modules/groups/groups.module').then((m) => m.GroupsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
