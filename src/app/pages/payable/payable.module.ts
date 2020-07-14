import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayableComponent } from './payable.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'payable',component:PayableComponent
  },
]

@NgModule({
  declarations: [PayableComponent],
  imports: [
  CommonModule,RouterModule.forChild(routes)
  ]
})
export class PayableModule { }
