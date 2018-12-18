import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../core/users.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  getproductID;
  detailsID;

  constructor(
    public userService:UserService,
  ) { }

  ngOnInit() {
    this.userService.getProductDetails();
    this.userService.getProductList()
  }

  changeProd(prod){
    console.log(prod.prod_name)
    localStorage.setItem("SinProduct", JSON.stringify(prod.prod_name))
    this.userService.getProductId();
  }

}
