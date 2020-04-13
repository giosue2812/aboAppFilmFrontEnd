import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {CreateComponent} from './create/create.component';


const routes: Routes = [
  {path:'list',component:ListComponent},
  {path:'detail/:id',component:DetailComponent},
  {path: 'create',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }
