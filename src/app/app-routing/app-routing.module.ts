import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EvictionsComponent} from '../evictions/evictions.component';
import {HomePageComponent} from "../home-page/home-page.component";
import {InfoComponent} from "../info/info.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'find', redirectTo: 'search'}
   {path: 'home', component: HomePageComponent},
   {path: 'search', component: EvictionsComponent},
   {path: 'info', component: InfoComponent},
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
