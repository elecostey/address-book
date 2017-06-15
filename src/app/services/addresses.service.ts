import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Address } from './../address';


@Injectable()
export class AddressesService {

  addresses: Array<Address> = [];

  public newAddressSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllAddresses() {
    return this.http.get('data/addresses.json').map(res => res.json());
  }

  addNewAddress(data) {
    this.newAddressSubject.next(data);
  }


}
