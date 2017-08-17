import { Component } from '@angular/core';
//import { PeopleService } from './people.service';
//import { IProduct } from './products';
//import { ProductService } from './products.service';
import { appService} from './app.service';

import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ appService]
})
export class AppComponent {
//  iproducts: IProduct[];
  value: string = "";
  appTitle: string = 'welcome';
  appList: any[] = [{
    "ID":"1",
    "Name":"One",
    "url":'app/Image/One.jpg'
  },
  {
    "ID":"2",
    "Name":"Two",
    "url":'app/Image/two.jpg'
  }];
  constructor( private _appService: appService ){

  }
  ngOnInit() : void{
    this.value = this._appService.getApp();
  //  this._product.getproducts().subscribe(iproducts => this.iproducts = iproducts);
  }
  title = 'My First Project';
  size = 150;
  oneClicked = false;
  imageSize(){
  	return this.size * 2;
  };
  Clicked(){
  	this.oneClicked = !this.oneClicked;
  	//alert("123 p-tag Clicked!");
  }
}
