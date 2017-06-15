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

}
