import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetDataService } from 'src/app/services/get-data.service';
import { SnackParComponent } from 'src/app/shared/components/snack-par/snack-par.component';

@Component({
  selector: 'app-add-kpis',
  templateUrl: './add-kpis.component.html',
  styleUrls: ['./add-kpis.component.scss']
})
export class AddKpisComponent implements OnInit {
  hide = true;
  error:any;
  durationInSeconds = 5;
  catName :any;
  data = {
    SouraId: 1,
    CatName: "",
    ImageURL: "https://firebasestorage.googleapis.com/v0/b/alfateha-521bf.appspot.com/o/images%2Fimages%20(1).jpg?alt=media&token=68615f1c-c2c8-42cd-b8df-968f653666a0",
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
  constructor(public _GetDataService:GetDataService ,
     @Inject(MAT_DIALOG_DATA) public dataAll: any,
      private dialogRef: MatDialogRef<AddKpisComponent>,
      private _snackBar: MatSnackBar
      ) { }


  openSnackBar() {
    this._snackBar.openFromComponent(SnackParComponent, {
      duration: this.durationInSeconds * 1000,
      data:this.catName
    });
  }



  onSubmit(){
    this._GetDataService.addArticle(this.data).subscribe((res:any)=>{
      if(res.StatusId == 200){
        this.catName = "تمت الاضافة بنجاح"
      }
      else{
        this.catName = "حث خطأ"
      }
      this.openSnackBar()

    })
    this.dialogRef.close();

  }


  ngOnInit(): void {
  }

}

