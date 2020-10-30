import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '1º DAM',
        loadChildren: () => import('../primero-dam/primero-dam.module').then(m => m.PrimeroDAMPageModule)
      },
      {
        path: '2º DAM',
        loadChildren: () => import('../segundo-dam/segundo-dam.module').then(m => m.SegundoDamPageModule)
      },
      {
        path: 'FCT',
        loadChildren: () => import('../fct/fct.module').then(m => m.FctPageModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
