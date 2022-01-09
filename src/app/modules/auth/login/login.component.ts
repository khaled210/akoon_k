import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


export class loginForm{
  username:string = "";
  Password:string ="";
  grant_type:string ="password"
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginData :loginForm = new loginForm()
  hide = true;

  constructor(public _AuthService:AuthService) { }

  onSubmit(login:NgForm){

    if(login.invalid) return;
    this._AuthService.login(this.loginData);

    // this.Auth.register(this.infoData).subscribe((res:any)=>{
    //   console.log(res);
    //   if(res.StatusId == 200){
    //     this.message = "تمت الإضافة بنجاح"
    //   }
    //   else{
    //     this.message = "يوجد خطأ ما"
    //   }
    //   this.openSnackBar()
    // })
  }

  ngOnInit(): void {
  }

}
