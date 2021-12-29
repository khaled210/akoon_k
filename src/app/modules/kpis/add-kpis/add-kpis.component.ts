import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-add-kpis',
  templateUrl: './add-kpis.component.html',
  styleUrls: ['./add-kpis.component.scss']
})
export class AddKpisComponent implements OnInit {
  hide = true;
  error:any;
  data = {
    SouraId: 1,
    CatName: "",
    ImageURL: "https://firebasestorage.googleapis.com/v0/b/alfatiha-5a446.appspot.com/o/icons%2FLogo.jpg?alt=media&token=c5676a2e-cdd4-4c53-8476-7fd47ecf8b85",
    ArticleDetails: [
        {
            Details: "sample string 2",
            LanguageId: 1,
            Title: "sample string 4",
            Created: "1/1/2020"
        },
        {
            Details: "sample string 2",
            LanguageId: 2,
            Title: "sample string 4",
            Created: "1/1/2020"
        }
    ]
  };
  constructor(public _GetDataService:GetDataService , private dialogRef: MatDialogRef<AddKpisComponent>) { }


  onSubmit(){
    this._GetDataService.addArticle(this.data).subscribe((res)=>{
      console.log(res);
    })
    this.dialogRef.close();
    console.log(this.data);

  }


  ngOnInit(): void {
  }

}
