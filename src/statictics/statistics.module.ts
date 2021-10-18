import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {StatisticsComponent} from "../statictics/statictics.component";


@NgModule({
  declarations: [
    AppComponent,StatisticsComponent
  ],
  imports: [
    BrowserModule,NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
