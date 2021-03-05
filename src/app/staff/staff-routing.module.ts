import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';


const routes: Routes = [
  {
      path: '',
      component: ListStaffComponent
  },
  {
      path: 'new',
      component: CreateStaffComponent
  },
  {
      path: ':id/edit',
      component: ViewStaffComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
