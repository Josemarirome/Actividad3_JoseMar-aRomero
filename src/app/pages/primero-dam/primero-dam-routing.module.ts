import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeroDAMPage } from './primero-dam.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeroDAMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeroDAMPageRoutingModule {}
