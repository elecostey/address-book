import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddressesComponent } from './addresses/addresses.component';

import { AddressesService } from './services/addresses.service'

@NgModule({
  declarations: [
    AppComponent,
    AddressesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AddressesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
