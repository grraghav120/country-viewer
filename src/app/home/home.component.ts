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
  isLoading:boolean=false;
  allCountries:any=[];
  dataSource:any=[];
  error:any;
  filterVal:any;
  searchText:any;
  constructor(public data:DataService,public route:Router){}

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  ngOnInit(): void {
    this.onFetchData();
  }

  onFetchData(){
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

  onPress(){
    this.data.getSearchByName(this.searchText).subscribe((res)=>{
      if(res){
      console.log(res);
      this.dataSource=res;
      }
      else{
        console.log('error');
        this.onFetchData();
      }
    })
  }

  onChange(event:any){
    // console.log(event.target.value);
    let val=event.target.value;
    if(val==='Filter Based on Continent'){
      this.onFetchData();
    }
    else{
    this.data.filterByRegion(val).subscribe((res)=>{
      this.dataSource=res;
    })
    }
  }

}