import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductsGetResponse } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  productInstallment: String = '';

  constructor() {
  }

  ngOnInit(): void {
    if (this.product.installment_available) {
      let productValue = this.product.promotional_value ? this.product.promotional_value : this.product.value
      let installmentValue = (productValue / this.product.installment_count).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      this.productInstallment = `${this.product.installment_count}x ${installmentValue}`
    }
  }
}
