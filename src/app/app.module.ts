import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressesComponent } from './addresses/addresses.component';
import { NewAddressComponent } from './new-address/new-address.component'

import { AddressesService } from './services/addresses.service';


@NgModule({
  declarations: [
    AppComponent,
    AddressesComponent,
    NewAddressComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AddressesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
