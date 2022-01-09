import { Component, OnInit } from '@angular/core';


export class loginForm{
  Email:string = "";
  Password:string ="";
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginData :loginForm = new loginForm()
  hide = true;

  constructor() { }

  onSubmit(){

  }

  ngOnInit(): void {
  }

}
