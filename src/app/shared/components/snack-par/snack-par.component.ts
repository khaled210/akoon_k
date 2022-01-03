import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'snack-par',
  templateUrl: './snack-par.component.html',
  styleUrls: ['./snack-par.component.scss']
})
export class SnackParComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
