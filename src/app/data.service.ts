import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataSource: any;
  apiUrl='https://restcountries.com/v3.1/';
  constructor(public http:HttpClient) { }

  getAllCountries(){
    return this.http.get(this.apiUrl+'all');
  }

  getSearchByName(name:string){
    return this.http.get(this.apiUrl+'name/'+name);
  }

  filterByRegion(val:string){
    return this.http.get(this.apiUrl+'region/'+val);
  }

}
