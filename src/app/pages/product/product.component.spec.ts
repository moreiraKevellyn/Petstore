import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, convertToParamMap, RouterLink } from '@angular/router';
import { ProductServiceMock } from 'src/app/mocks/products-mock';
import { ProductComponent } from './product.component';
import { MockComponents } from 'ng-mocks';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { SwiperComponent } from 'ngx-useful-swiper';
import { AnimalType, Product } from 'src/app/interfaces/product';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent,
        MockComponents(
          MatIcon,
          MatCardTitle,
          MatCard,
          MatCardContent,
          SwiperComponent,
          RouterLink
        ),
      ],
      providers: [
        {
          provide: ProductsService,
          useClass: ProductServiceMock
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '1'
              })
            }
          }
        }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.product = product
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check  title item in HTML', () => {
    const html = fixture.nativeElement;
    const result = html.getElementsByClassName('product-detail-name')[0].textContent;
    expect(result).toContain(product.name);
  });

  it('should check product price for subscribers users', () => {
    const html = fixture.nativeElement;
    const result = html.getElementsByClassName('price-promotional-value')[0].textContent;
    expect(result).toContain(product.promotional_value);

  })

  it('should check product price original value', () => { 
    const html = fixture.nativeElement;
    const result = html.getElementsByClassName('price')[0].textContent;
    expect(result).toContain(product.value);
  })

});

let product: Product = {

  "name": "Antipulgas e Carrapatos MSD Bravecto para C\u00e3es de 4,5 a 10 Kg",
  "description": "Com a\u00e7\u00e3o r\u00e1pida, promove o extermino total dos parasitas em 24 horas",
  "value": 204.9,
  "promotional_value": 184.41,
  "featured_image": "https://www.petlove.com.br/images/products/212200/product/Antipulgas_e_Carrapatos_MSD_Bravecto_para_C%C3%A3es_de_4_5_a_10_Kg_3104947-1_.jpg",
  "images": ["https://www.petlove.com.br/images/products/212200/product/Antipulgas_e_Carrapatos_MSD_Bravecto_para_C%C3%A3es_de_4_5_a_10_Kg_3104947-1_.jpg"],
  "videos": ["https://youtu.be/tEZ9j_i-ja8"],
  "rating_stars": 5,
  "rating_count": 424,
  "installment_available": true,
  "installment_count": 2,
  "featured": true,
  "category": "Medicina e Sa\u00fade",
  "subcategory": "Antipulgas e Carrapatos",
  "animal_type": AnimalType.Dog,
  "url": "/anti-pulgas-e-carrapatos-msd-bravecto-para-caes-de-45-a-10kg---200-mg-3104947/p",
  "created_at": "2021-04-12 21:28:35.881119+00:00",
  "id": "EJf7MU4hES59rlLMJrdH",
}