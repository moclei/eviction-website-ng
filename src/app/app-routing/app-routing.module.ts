import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EvictionsComponent} from '../evictions/evictions.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'find', redirectTo: 'search'}
   {path: 'home', component: EvictionsComponent},
   {path: 'search', component: EvictionsComponent},
   {path: 'info', component: EvictionsComponent},
  // {path: '**', component: HomeComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }