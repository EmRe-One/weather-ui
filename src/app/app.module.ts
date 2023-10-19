import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./MaterialModule";
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {WeatherCardComponent} from './components/weather-card/weather-card.component';
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
