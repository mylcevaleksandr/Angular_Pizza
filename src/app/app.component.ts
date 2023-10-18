import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public products: ProductType[] = []

  public formValues = {
    productTitle: "",
    address: "",
    phone: ""
  }
  lateData: Promise<string> | null = null

  constructor(private productService: ProductService,
              public cart: CartService) {
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target)
    this.formValues.productTitle = title
    this.cart.count++
    // this.products=this.products.filter(item=>item.title.toUpperCase()!==title.toUpperCase())
  }

  public createOrder() {

    if (!this.formValues.productTitle) {
      alert("fill pizza");
      return;
    }
    if (!this.formValues.address) {
      alert("fill address");
      return;
    }
    if (!this.formValues.phone) {
      alert("fill phone");
      return;
    }
    alert("Thank You!");

    this.formValues = {
      productTitle: "",
      address: "",
      phone: ""
    }
  }


  ngOnInit() {
    this.lateData = new Promise<string>(function (resolve) {
      setTimeout(() => {
        resolve('Hello!')
      }, 3000)
    })
    this.products = this.productService.getProducts()
  }
}
