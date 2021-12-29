import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetDataService } from 'src/app/services/get-data.service';
import { AddKpisComponent } from '../add-kpis/add-kpis.component';

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
export class KpisListComponent implements OnInit {
  dataSource = ELEMENT_DATA;

  displayedColumns: string[] = ['CatName', 'Created', 'CreatedBy', 'Id','ImageURL','SouraId','Updated','UpdatedBy','setting'];

  constructor(public data: GetDataService , public dialog: MatDialog) {
    this.data.getAll().subscribe((res)=>{
        this.dataSource = res.data
    })
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddKpisComponent, {
      width: '50%',
    });
  }

}
