import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'cart',
    loadChildren: () => import('../cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('../checkout/checkout.module').then((m) => m.CheckoutModule),
  },
];

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductModule {}
