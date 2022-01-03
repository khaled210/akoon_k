import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetDataService } from 'src/app/services/get-data.service';
import { SnackParComponent } from 'src/app/shared/components/snack-par/snack-par.component';



@Component({
  selector: 'app-delete-kpis',
  templateUrl: './delete-kpis.component.html',
  styleUrls: ['./delete-kpis.component.scss']
})
export class DeleteKpisComponent implements OnInit {

  done: any;
  durationInSeconds = 5;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<DeleteKpisComponent>,
  public _GetDataService:GetDataService,
  private _snackBar: MatSnackBar){}


  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackParComponent, {
      duration: this.durationInSeconds * 1000,
      data: this.done
    });
  }

  sure(){
    this._GetDataService.delArtical(this.data.id).subscribe((res:any)=>{
      if(res.message == "تم الحذف بنجاح"){
        this.done = res.message;
      }
      else{
        this.done = "حث خطأ";
      }
      this.openSnackBar()
    })
  }


  ngOnInit(): void {
  }

}
