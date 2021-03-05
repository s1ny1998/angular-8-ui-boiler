import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';


@NgModule({
  declarations: [ListStaffComponent, ViewStaffComponent, CreateStaffComponent],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
