import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StepsMenuComponent } from './steps-menu/steps-menu.component';
import { PrimengComponentsModule } from './primeng.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StepsMenuComponent
  ],
  imports: [
    BrowserModule,
    PrimengComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
