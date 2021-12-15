import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    GoalsListComponent
  ],
  imports: [
    CommonModule,
    GoalsRoutingModule,
    SharedModule
  ]
})
export class GoalsModule { }
