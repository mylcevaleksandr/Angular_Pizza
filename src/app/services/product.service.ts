import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {map, Observable, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ProductService {
  private products: ProductType[] = [
    // {
    //   id: 1,
    //   image: "pizza_1.png",
    //   title: "Мясная Делюкс",
    //   description: "Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили,ананасы",
    //   date: '2022-12-27'
    // },
    // {
    //   id: 2,
    //   image: "pizza_2.png",
    //   title: "Морская Премиум",
    //   description: "Перец, сыр, креветки, кальмары, мидии, лосось",
    //   date: '2022-12-27'
    // },
    // {
    //   id: 3,
    //   image: "pizza_3.png",
    //   title: "Бекон и Сосиски",
    //   description: "Бекон, сыр, сосиски, ананас, томатная паста",
    //   date: '2022-12-27'
    // },
    // {
    //   id: 4,
    //   image: "pizza_4.png",
    //   title: "Куриная Делюкс",
    //   description: "Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста",
    //   date: '2022-12-27'
    // },
    // {
    //   id: 5,
    //   image: "pizza_5.png",
    //   title: "Барбекю Премиум",
    //   description: "Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили",
    //   date: '2022-12-27'
    // },
    // {
    //   id: 6,
    //   image: "pizza_6.png",
    //   title: "Пепперони Дабл",
    //   description: "Пепперони, сыр, колбаса 2 видов: обжаренная и вареная",
    //   date: '2022-12-27'
    // },
    // {
    //   id: 7,
    //   image: "pizza_7.png",
    //   title: "Куриное трио",
    //   description: "Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы",
    //   date: '2022-12-27'
    // },
    // {
    //   id: 8,
    //   image: "pizza_8.png",
    //   title: "Сырная",
    //   description: "Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный",
    //   date: '2022-12-27'
    // },
  ]

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/pizzas')
      // ?extraField=1
    //   , {
    //   headers: new HttpHeaders({
    //     Authorization: 'auth-token'
    //   })
    // })
    //   .pipe(
    //     tap((result) => {
    //       console.log(result)
    //     }),
    //     map((result) => (result.data))
    //   )
  }

  getProduct(id: number): Observable<ProductType>{
    return this.http.get<ProductType>(`https://testologia.site/pizzas?id=${id}`)

    // return this.products.find(item => (item.id === id))
  }
  createOrder(data:{product:string,address:string,phone:string}){
    return this.http.post<{ success:boolean,message?:string }>(`https://testologia.site/order-pizza`,data)

    // return this.products.find(item => (item.id === id))
  }
}
