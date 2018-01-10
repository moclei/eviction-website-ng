import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule} from '@angular/http';
import {
  MatToolbarModule, MatCardModule, MatTableModule, MatProgressBarModule,
  MatPaginatorModule, MatButtonModule, MatCheckboxModule, MatMenuModule,
  MatIconModule, MatInputModule, MatSortModule, MatDialogModule, MatListModule
} from '@angular/material'

import { AppComponent } from './app.component';
import { EvictionsComponent } from './evictions/evictions.component';
import { EvictionDialogComponent, EvictionListComponent} from './eviction-list/eviction-list.component';
import { EvictionSearchInputComponent } from './eviction-search-input/eviction-search-input.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InfoComponent } from './info/info.component';
import { EvictionUploadComponent } from './eviction-upload/eviction-upload.component';
import { EvictionService} from './eviction.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {FileUploadModule} from 'ng2-file-upload';

import { AlertModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    EvictionsComponent,
    EvictionListComponent,
    EvictionDialogComponent,
    EvictionSearchInputComponent,
    HeaderComponent,
    HomePageComponent,
    InfoComponent,
    EvictionUploadComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatListModule,
    MatSortModule,
    AppRoutingModule,
    MatButtonModule,
    FileUploadModule
  ],
  entryComponents: [
    EvictionDialogComponent
  ],
  providers: [
    EvictionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
