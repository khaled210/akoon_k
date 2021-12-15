import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }


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
  }

}
