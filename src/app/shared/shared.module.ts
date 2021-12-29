import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { GetDataService } from '../services/get-data.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports:[
    MaterialModule,
  ]
})
export class SharedModule { }
