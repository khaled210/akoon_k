import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [],
  },
  {
    path: 'kpis',
    loadChildren: () => import('./modules/kpis/kpis.module').then((m) => m.KpisModule),
    canActivate: [],
  },
    {
    path: 'goals',
    loadChildren: () => import('./modules/goals/goals.module').then((m) => m.GoalsModule),
    canActivate: [],
  },
  {
    path: 'categories',
    loadChildren: () => import('./modules/categories/categories.module').then((m) => m.CategoriesModule),
    canActivate: [],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
