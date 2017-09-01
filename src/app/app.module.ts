import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EvictionsComponent } from './evictions/evictions.component';
import { EvictionListComponent } from './eviction-list/eviction-list.component';
import { EvictionSearchInputComponent } from './eviction-search-input/eviction-search-input.component';


import { DataTableModule, SharedModule, InputTextModule, ButtonModule, CheckboxModule, DialogModule, PanelModule } from 'primeng/primeng';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EvictionService} from './eviction.service';
import {HttpModule} from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EvictionsComponent,
    EvictionListComponent,
    EvictionSearchInputComponent,
    HeaderComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    DataTableModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    CheckboxModule,
    SharedModule,
    HttpModule,
    PanelModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    EvictionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
