import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetDataService } from 'src/app/services/get-data.service';
import { SnackParComponent } from 'src/app/shared/components/snack-par/snack-par.component';
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
  durationInSeconds = 5;
  done: any;
  article: Article = new Article();

    constructor(@Inject(MAT_DIALOG_DATA) public data: any ,
    public _GetDataService:GetDataService ,
    private dialogRef: MatDialogRef<EditKpisComponent>,
    private _snackBar: MatSnackBar ) { }


    openSnackBar() {
      this._snackBar.openFromComponent(SnackParComponent, {
        duration: this.durationInSeconds * 1000,
        data: this.done
      });
    }


    onSubmit(){
      this._GetDataService.updateArticle(this.article).subscribe((res:any)=>{
        if(res.message == "تم تعديل البيانات بنجاح"){
          this.done = res.message;
        }else{
          this.done = "حدث خطأ";
        }
        this.openSnackBar()
      })
      this.dialogRef.close();
    }

    ngOnInit(): void {
      this.article = {...this.data};
    }
  }

