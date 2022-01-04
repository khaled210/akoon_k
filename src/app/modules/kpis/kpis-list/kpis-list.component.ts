import {AfterViewInit, Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GetDataService } from 'src/app/services/get-data.service';
import { AddKpisComponent } from '../add-kpis/add-kpis.component';
import { DeleteKpisComponent } from '../delete-kpis/delete-kpis.component';
import { EditKpisComponent } from '../edit-kpis/edit-kpis.component';

export interface PeriodicElement {
  CatName: string;
  Created: number;
  CreatedBy: string;
  Id: number;
  ImageURL: number;
  SouraId: number;
  Updated: number;
  UpdatedBy: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-kpis-list',
  templateUrl: './kpis-list.component.html',
  styleUrls: ['./kpis-list.component.scss']
})
export class KpisListComponent implements OnInit, OnDestroy {
  dataSource = ELEMENT_DATA;

  displayedColumns: string[] = ['CatName', 'Created', 'CreatedBy', 'Id','ImageURL','SouraId','Updated','UpdatedBy','setting'];
  subscriptions:Subscription[] = [];

  constructor(public _GetDataService: GetDataService , public dialog: MatDialog) {

  }



  ngOnInit(): void {
    this._GetDataService.getAll();
   const dataSub = this._GetDataService.kpiList$.subscribe(res=>this.dataSource = res)
   this.subscriptions.push(dataSub);

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddKpisComponent, {
      width: '50%',
    });
  }
  deleteDialog(Id:number , CatName:string): void {
    const dialogRef = this.dialog.open(DeleteKpisComponent, {
      width: '250px',
      data: {
               id:Id ,
              catName : CatName,
            },
    });
  }
  editDialog(data:any): void {
    const dialogRef = this.dialog.open(EditKpisComponent, {
      width: '500px',
      data
    });
  }
  ngOnDestroy(): void {
      this.subscriptions.map(sub=>sub.unsubscribe())
  }
}
