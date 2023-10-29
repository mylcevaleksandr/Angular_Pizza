import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public formValues = {
    productTitle: "",
    address: "",
    phone: ""
  }

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // if (this.cartService.product-card){
    //   this.formValues.productTitle=this.cartService.product-card
    // }

    const productParam=this.activatedRoute.snapshot.queryParamMap.get('product')

    if (productParam){
      this.formValues.productTitle = productParam
    }

    // this.activatedRoute.queryParams.subscribe((params: Params) => {
    //   if (params['product-card']) {
    //     this.formValues.productTitle = params['product-card']
    //
    //   }
    // })
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
}
