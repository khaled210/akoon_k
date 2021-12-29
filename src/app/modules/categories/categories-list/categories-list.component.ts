import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  homar:number;
  setting: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', homar:5 ,setting: ''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', homar:5 ,setting: ''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', homar:5 ,setting: ''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', homar:5 ,setting: ''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', homar:5 ,setting: ''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', homar:5 ,setting: ''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', homar:5 ,setting: ''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', homar:5 ,setting: ''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', homar:5 ,setting: ''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', homar:5 ,setting: ''},
];


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  dataSource = ELEMENT_DATA;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','homar','setting'];

  constructor() { }

  ngOnInit(): void {
  }

}
