import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BugsPage } from './bugs.page';

const routes: Routes = [
  {
    path: '',
    component: BugsPage
  },
  // {
  //   path: 'addbugs',
  //   loadChildren: () => import('./addbugs/addbugs.module').then( m => m.AddbugsPageModule)
  // },
  // {
  //   path: 'addbugs/:id',
  //   loadChildren: () => import('./addbugs/addbugs.module').then( m => m.AddbugsPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BugsPageRoutingModule {}
