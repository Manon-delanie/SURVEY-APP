import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bible2Page } from './bible2.page';

const routes: Routes = [
  {
    path: '',
    component: Bible2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bible2PageRoutingModule {}
