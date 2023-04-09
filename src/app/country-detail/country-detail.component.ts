import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  dataSource: any;
  isLoading:boolean=true;
  constructor(public data:DataService){}
  ngOnInit(): void {
      this.dataSource=this.data.dataSource
      setTimeout(() => {
        this.isLoading=false;
      }, 1000);
  }
}
