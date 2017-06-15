import { Component, OnInit,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddressesService } from './../services/addresses.service';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css']
})
export class NewAddressComponent implements OnInit {

  @ViewChild('newAddress') newAddress;

  constructor(
    private addressesService : AddressesService
  ) { }

  ngOnInit() {
  }

  onAddressSubmit(data): void {
    this.addressesService.addNewAddress(data);
    this.newAddress.reset();
  }


}
