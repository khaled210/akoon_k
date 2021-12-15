import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
{path: '', component:AdminComponent, children:[
  {
    path: 'categories',
    loadChildren: () =>
      import('src/app/modules/categories/categories.module').then((m) => m.CategoriesModule)
  },
  {
    path: 'goals',
    loadChildren: () =>
      import('src/app/modules/goals/goals.module').then((m) => m.GoalsModule)
  },
  {
    path: 'kpis',
    loadChildren: () =>
      import('src/app/modules/kpis/kpis.module').then((m) => m.KpisModule)
  },
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
