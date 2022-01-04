import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { FormsModule } from '@angular/forms';
import { SnackParComponent } from './components/snack-par/snack-par.component';





@NgModule({
  declarations: [
    SnackParComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    MaterialModule,
    FormsModule,
    SnackParComponent
  ]
})
export class SharedModule { }
