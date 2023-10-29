import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {
  }

  public products: ProductType[] = []

  ngOnInit() {
    // this.lateData = new Promise<string>(function (resolve) {
    //   setTimeout(() => {
    //     resolve('Hello!')
    //   }, 3000)
    // })
    this.products = this.productService.getProducts()
  }


  // public addToCart(title: string): void {
  //   this.cartService.product-card = title
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}})
  //   // this.scrollTo(target)
  //   // this.formValues.productTitle = title
  //   // this.cart.count++
  //   // this.products=this.products.filter(item=>item.title.toUpperCase()!==title.toUpperCase())
  // }
}
