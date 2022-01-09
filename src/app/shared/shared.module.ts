import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { FormsModule } from '@angular/forms';
import { SnackParComponent } from './components/snack-par/snack-par.component';
import { ValidateEqualModule } from 'ng-validate-equal';





@NgModule({
  declarations: [
    SnackParComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ValidateEqualModule
  ],
  exports:[
    MaterialModule,
    FormsModule,
    SnackParComponent,
    ValidateEqualModule
  ]
})
export class SharedModule { }
