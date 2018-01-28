import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule} from '@angular/http';
import {
  MatToolbarModule, MatCardModule, MatTableModule, MatProgressBarModule,
  MatPaginatorModule, MatButtonModule, MatCheckboxModule, MatMenuModule,
  MatIconModule, MatInputModule, MatSortModule, MatDialogModule, MatListModule,
  MatProgressSpinnerModule
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
import { FileUploadModule } from 'ng2-file-upload';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ScrollToModule } from 'ng2-scroll-to-el';
import { FooterComponent } from './footer/footer.component';
import {CoreModule} from './CoreModule';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import {ContactService} from './contact.service';
import { CheckmarkComponent } from './animations/checkmark/checkmark.component';



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
    EvictionUploadComponent,
    FooterComponent,
    DisclaimerComponent,
    CheckmarkComponent
  ],
  imports: [
    ScrollToModule.forRoot(),
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
    FileUploadModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    CoreModule
  ],
  entryComponents: [
    EvictionDialogComponent,
    DisclaimerComponent
  ],
  providers: [
    EvictionService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
