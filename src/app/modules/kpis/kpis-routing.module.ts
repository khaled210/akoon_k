import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KpisListComponent } from './kpis-list/kpis-list.component';

const routes: Routes = [
  {path: '', component:KpisListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KpisRoutingModule { }
