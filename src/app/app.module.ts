import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./MaterialModule";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgOptimizedImage,
    // <-- add material modules in this module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
