import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetails } from "../../core/users.model";
import { UserService } from "../../core/users.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  productID;

  constructor(
    private router: Router,
    public userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getProductList()
  }

  viewdetails(prod){
    console.log(prod.id);
    this.router.navigate(['/atjoin/product/details'])

    console.log(prod.prod_name)
    localStorage.setItem("prodName", JSON.stringify(prod.prod_name))


  }
  
}
