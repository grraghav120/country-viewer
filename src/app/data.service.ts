import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataSource: any;

  constructor(public http:HttpClient) { }

  getAllCountries(){
    return this.http.get('https://restcountries.com/v3.1/all');
  }

}
