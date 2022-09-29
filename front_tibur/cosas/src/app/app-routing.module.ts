import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-cosas',
    loadChildren: () => import('./my-cosas/my-cosas.module').then( m => m.MyCosasPageModule)
  },
  {
    path: 'create-your-cosa',
    loadChildren: () => import('./create-your-cosa/create-your-cosa.module').then( m => m.CreateYourCosaPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'delete/:id',
    loadChildren: () => import('./delete/delete.module').then( m => m.DeletePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
