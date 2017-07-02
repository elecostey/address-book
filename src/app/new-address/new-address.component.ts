import { Component, OnInit,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddressesService } from './../services/addresses.service';
import { Address } from './../address';


@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css']
})
export class NewAddressComponent implements OnInit {

  isInEditMode = false;

  @ViewChild('newAddress') newAddress;

  constructor(
    private addressesService : AddressesService
  ) { }

  ngOnInit() {
    this.addressesService.editedAddressSubject.subscribe(
      data => {
        this.newAddress.controls['surname'].setValue(data.surname);
        this.newAddress.controls['name'].setValue(data.name);
        this.newAddress.controls['address'].setValue(data.address);
        this.newAddress.controls['city'].setValue(data.city);
        this.isInEditMode = true;
      }
    )
  }

  onAddressSubmit(data): void {
    this.addressesService.addNewAddress(data);
    this.newAddress.reset();
  }

  onSaveAddress(data): void {
    this.addressesService.saveAddressEdit(data);
    this.isInEditMode = false;
    this.newAddress.reset();

  }
}
