import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public products: ProductType[] = [
    {
      image: "pizza_1.png",
      title: "Мясная Делюкс",
      description: "Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили,ананасы",
      date: '2022-12-27'
    },
    {
      image: "pizza_2.png",
      title: "Морская Премиум",
      description: "Перец, сыр, креветки, кальмары, мидии, лосось",
      date: '2022-12-27'
    },
    {
      image: "pizza_3.png",
      title: "Бекон и Сосиски",
      description: "Бекон, сыр, сосиски, ананас, томатная паста",
      date: '2022-12-27'
    },
    {
      image: "pizza_4.png",
      title: "Куриная Делюкс",
      description: "Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста",
      date: '2022-12-27'
    },
    {
      image: "pizza_5.png",
      title: "Барбекю Премиум",
      description: "Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили",
      date: '2022-12-27'
    },
    {
      image: "pizza_6.png",
      title: "Пепперони Дабл",
      description: "Пепперони, сыр, колбаса 2 видов: обжаренная и вареная",
      date: '2022-12-27'
    },
    {
      image: "pizza_7.png",
      title: "Куриное трио",
      description: "Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы",
      date: '2022-12-27'
    },
    {
      image: "pizza_8.png",
      title: "Сырная",
      description: "Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный",
      date: '2022-12-27'
    },
  ]
  public formValues = {
    productTitle: "",
    address: "",
    phone: ""
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target)
    this.formValues.productTitle = title
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

  lateData: Promise<string> | null = null

  ngOnInit() {
    this.lateData = new Promise<string>(function (resolve) {
      setTimeout(() => {
        resolve('Hello!')
      }, 3000)
    })
  }
}
