import { Component, OnInit } from '@angular/core';
import { Product, ProductsGetResponse } from 'src/app/interfaces/product';
import { ProductsHighlights } from 'src/app/interfaces/products-highlights';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProductsHighlights();
    return this.products;
  }

  getProductsHighlights(): void {
    this.productsService.getProductsHighlights()
      .subscribe(response => {
        this.products = response;
      });
  }

}
