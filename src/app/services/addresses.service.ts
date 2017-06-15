import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddressesService {

  constructor(private http: Http) { }

  getAllAddresses() {
    return this.http.get('data/addresses.json').map(res => res.json());
  }

}
