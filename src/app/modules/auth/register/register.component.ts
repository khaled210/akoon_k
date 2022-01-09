import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { SnackParComponent } from 'src/app/shared/components/snack-par/snack-par.component';


export class info{
    FullName:string ="";
    Phone:number = 0;
    Email:string = "";
    GenderId:number =1;
    Password:string ="";
}

// export interface info {
//   FullName:string,
//   Phone:number,
//   Email:string,
//   GenderId:number,
//   Password:string,
//   AppLangId:number,
// }


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
infoData :info = new info()
durationInSeconds = 5;
message :any;
hide = true;
confirmPassword:string="";
isMatch:boolean =true;
  constructor(private Auth:AuthService,
              private _snackBar: MatSnackBar,) { }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackParComponent, {
      duration: this.durationInSeconds * 1000,
      data:this.message
    });
  }

  onSubmit(form:NgForm){
    if(form.invalid) return;
    this.Auth.register(this.infoData).subscribe((res:any)=>{
      console.log(res);
      if(res.StatusId == 200){
        this.message = "تمت الإضافة بنجاح"
      }
      else{
        this.message = "يوجد خطأ ما"
      }
      this.openSnackBar()
    })
  }

  match(){
    if(this.infoData.Password == this.confirmPassword){
      this.isMatch = true;
    }else{
      this.isMatch = false;
    }
  }

  ngOnInit(): void {

  }

}
