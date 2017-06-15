import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AddressesService } from './../services/addresses.service';
import { Address } from './../address';


@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  addresses: Array<Address> = [];
  error: string;

  //2 way data binding holders
  surnameEdited = "";
  nameEdited = "";
  addressEdited = "";
  cityEdited = "";


  constructor(
    private http: Http,
    private addressesService : AddressesService
  ) { }

  ngOnInit() {
    this.addressesService.getAllAddresses()
    .subscribe(
      data => this.addresses = data,
      error => this.error = error.statusText
    );

    this.addressesService.newAddressSubject.subscribe(
      data => this.addresses = [data, ...this.addresses]
    )
  }

  deleteAddress(address) {
    let index = this.addresses.indexOf(address);
    this.addresses.splice(index, 1);
  }

  saveAddress(address) {
    let index = this.addresses.indexOf(address);
    this.addresses[index].surname = this.surnameEdited;
    this.addresses[index].name = this.nameEdited;
    this.addresses[index].address = this.addressEdited;
    this.addresses[index].city = this.cityEdited;
  }

  updateAddress(address){
    this.surnameEdited = address.surname;
    this.nameEdited = address.name;
    this.addressEdited = address.address;
    this.cityEdited = address.city;
  }
}
