import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { FormsModule } from '@angular/forms';
import { SnackParComponent } from './components/snack-par/snack-par.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';






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
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ]
})
export class SharedModule { }
