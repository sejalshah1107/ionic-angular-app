import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbugsPage } from './addbugs.page';

const routes: Routes = [
  {
    path: '',
    component: AddbugsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbugsPageRoutingModule {}
