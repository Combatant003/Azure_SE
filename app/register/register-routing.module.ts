import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';
import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  },
  // {
  //   path: 'tabs',
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: 'tab1',
  //       loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
  //     }
  //   ]
  // },
  {
    path: 'tabs',
    loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
