import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './parent/enfant/enfant.component';

const routes: Routes = [
  {
    path: 'enfant',
    component: EnfantComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
