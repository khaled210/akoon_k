import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpisRoutingModule } from './kpis-routing.module';
import { KpisListComponent } from './kpis-list/kpis-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { AddKpisComponent } from './add-kpis/add-kpis.component';




@NgModule({
  declarations: [
    KpisListComponent,
    AddKpisComponent
  ],
  imports: [
    CommonModule,
    KpisRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports:[
    SharedModule,
    MaterialModule
  ]
})
export class KpisModule { }
