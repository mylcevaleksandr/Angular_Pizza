import {Component} from '@angular/core';

import {CartService} from "../../../services/cart.service";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public cartService: CartService, private authService: AuthService) {
  }

  logIn() {
    this.authService.logIn()
  }

  logOut() {
    this.authService.logOut()
  }
}
