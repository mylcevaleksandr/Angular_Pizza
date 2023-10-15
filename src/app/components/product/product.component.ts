import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: ProductType
  @Input() i: number = 0
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent

  // @ViewChild('elem')
  // private elem!: ElementRef

  constructor() {
    this.product = {
      image: '',
      title: '',
      description: '',
      date:''
    }

  }

  addProductToCart() {
    this.addToCartEvent.emit(this.titleComponent.title);
  }
}
