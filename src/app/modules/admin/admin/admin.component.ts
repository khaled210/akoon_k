import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userName:string =""

  constructor(public auth:AuthService) { }
  profileData(){
    this.auth.getProfileData().subscribe((res:any)=>{
      this.userName =res.data.FullName
    })
  }

  sideLinksObject = [
    {
      label:'Templates',
      data:[
        {
          label:'Categories',
          icon:'categories-icon.svg',
          routerLink:'categories'
        },
        {
          label:'Goals',
          icon:'goals2-icon.svg',
          routerLink:'goals'
        },
        {
          label:'KPIs',
          icon:'kpis2-icon.svg',
          routerLink:'kpis'
        },
      ]
    },
  ];

  ngOnInit(): void {
    this.profileData()
  }

}
