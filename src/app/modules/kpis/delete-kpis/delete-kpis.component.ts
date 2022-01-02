import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetDataService } from 'src/app/services/get-data.service';



@Component({
  selector: 'app-delete-kpis',
  templateUrl: './delete-kpis.component.html',
  styleUrls: ['./delete-kpis.component.scss']
})
export class DeleteKpisComponent implements OnInit {

  done: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DeleteKpisComponent> ,public _GetDataService:GetDataService) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  sure(){
    this._GetDataService.delArtical(this.data.id).subscribe((res:any)=>{
      console.log(res);
      this.done = res.message;
      if(res.message == "تم الحذف بنجاح"){
      }
    })
  }


  ngOnInit(): void {
  }

}
