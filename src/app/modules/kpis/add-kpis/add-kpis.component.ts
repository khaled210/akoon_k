import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-kpis',
  templateUrl: './add-kpis.component.html',
  styleUrls: ['./add-kpis.component.scss']
})
export class AddKpisComponent implements OnInit {
  hide = true;
  error:any;
  data = {
    terms:'',
    Password: '',
    FullName: '',
    phone: '',
    Email: '',
    GenderId: '',
    AppLangId: '',
  };


  onSubmit(){
    // if(this.data.Email == "11" && this.data.FullName =="tawfeekk171@gmail.com"){
    //   console.log(this.data);
    // }
    // else{
    //   console.log('erorrrrrrr');
    // }
    console.log(this.data);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
