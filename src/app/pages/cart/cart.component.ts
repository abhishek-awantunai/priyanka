import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  dataDenge: any = {
    class: 'homeHeader',
    text: {
      title: 'Abba dabba chabba',
    },
  };

  title: String = 'Cart Works!';

  constructor() {}

  ngOnInit(): void {}
}
