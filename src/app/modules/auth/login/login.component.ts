import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Routes } from '@angular/router';
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
  error ="";

  constructor(public auth:AuthService , private _Router:Router) { }

  // profileData(){
  //   this.auth.getProfileData().subscribe((res:any)=>{
  //     console.log(res.data.FullName);
  //   })
  // }

  onSubmit(login:NgForm){
    if(login.valid)
    this.auth.login(this.loginData).subscribe((res:any)=>{
      if(res.role == "Students"){
        localStorage.setItem('userToken',res.access_token);
        // this.profileData()
        this._Router.navigate(['/admin/kpis'])
      }
    },
    (error)=>{
     this.error = error.error.error_description
    })
  }



  ngOnInit(): void {
  }

}
