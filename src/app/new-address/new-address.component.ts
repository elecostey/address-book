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


  editedAddressInComponent: Address;
  @ViewChild('newAddress') newAddress;

  constructor(
    private addressesService : AddressesService
  ) { }

  ngOnInit() {
    this.addressesService.editedAddressSubject.subscribe(
      data => {
        this.editedAddressInComponent = data;
        this.newAddress.controls['surname'].setValue(this.editedAddressInComponent.surname);
        this.newAddress.controls['name'].setValue(this.editedAddressInComponent.name);
        this.newAddress.controls['address'].setValue(this.editedAddressInComponent.address);
        this.newAddress.controls['city'].setValue(this.editedAddressInComponent.city);
      }

    )

  }

  onAddressSubmit(data): void {
    this.addressesService.addNewAddress(data);
    this.newAddress.reset();
  }


}
