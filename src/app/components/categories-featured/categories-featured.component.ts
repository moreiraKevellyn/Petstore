import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-featured',
  templateUrl: './categories-featured.component.html',
  styleUrls: ['./categories-featured.component.scss']
})
export class CategoriesFeaturedComponent implements OnInit {

  categoriesList: Category[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories()
      .subscribe(response => {
        this.categoriesList = response;
      });
  }
}
