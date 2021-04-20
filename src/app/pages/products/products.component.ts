import { Component, OnInit } from '@angular/core';
import { Product, ProductsGetResponse } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {

    this.productsService.getProducts()
      .subscribe(response => {
        this.products = response.products;
      });
  }

}
