import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/commmon.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(public _commonService: CommonService) {}

  ngOnInit(): void {}
}
