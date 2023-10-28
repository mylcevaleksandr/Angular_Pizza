import {Component} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    // this.lateData = new Promise<string>(function (resolve) {
    //   setTimeout(() => {
    //     resolve('Hello!')
    //   }, 3000)
    // })
    this.products = this.productService.getProducts()
  }

  public products: ProductType[] = []

  public addToCart(title: string): void {
    // this.scrollTo(target)
    // this.formValues.productTitle = title
    // this.cart.count++
    // this.products=this.products.filter(item=>item.title.toUpperCase()!==title.toUpperCase())
  }
}
