import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { CategoriesFeaturedComponent } from 'src/app/components/categories-featured/categories-featured.component';
import { ProductItemComponent } from 'src/app/components/product-item/product-item.component';
import { ProductServiceMock } from 'src/app/mocks/products-mock';
import { ProductsService } from 'src/app/services/products.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent,
        MockComponents(
          CategoriesFeaturedComponent,
          ProductItemComponent
        )],
      providers: [
        {
          provide: ProductsService,
          useClass: ProductServiceMock
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
