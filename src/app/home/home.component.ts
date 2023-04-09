import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['symbol','flag', 'name','continents','population','area','button'];
  isLoading:boolean=true;
  allCountries:any=[];
  dataSource:any=[];
  error:any;
  constructor(public data:DataService,public route:Router){}

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  ngOnInit(): void {
    this.isLoading=true;
    this.data.getAllCountries().subscribe((res) => {
      if(res){
      this.dataSource=res;
      this.data.dataSource=this.dataSource;
      setTimeout(() => {
        this.isLoading=false;
      }, 2000);
    }
    else{
      this.error="Error 404 ! Try again after some time";
    }
    });
  }
  onClickCountry(element:any){
    this.data.dataSource=element;
    this.route.navigate(['country',element.flag]);
  }
}