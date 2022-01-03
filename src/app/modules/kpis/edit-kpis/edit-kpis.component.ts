import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetDataService } from 'src/app/services/get-data.service';
export class Article{
      Id: number = 0;
      SouraId:number = 0;
      CatName:string= "";
      Created: string= "";
      ImageURL:string= "";
      ArticleDetails : [] = [];
}
@Component({
  selector: 'app-edit-kpis',
  templateUrl: './edit-kpis.component.html',
  styleUrls: ['./edit-kpis.component.scss']
})
export class EditKpisComponent implements OnInit {
  article: Article = new Article();
    constructor(@Inject(MAT_DIALOG_DATA) public data: any ,public _GetDataService:GetDataService ,private dialogRef: MatDialogRef<EditKpisComponent>, ) { }

    onSubmit(){

      this._GetDataService.updateArticle(this.article).subscribe((res)=>{
        console.log(res);
      })
      this.dialogRef.close();
    }

    ngOnInit(): void {
      this.article = {...this.data};
    }
  }

