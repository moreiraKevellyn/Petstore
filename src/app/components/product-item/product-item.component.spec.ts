import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { ProductsService } from 'src/app/services/products.service';
import { ProductServiceMock } from 'src/app/mocks/products-mock';
import { ProductItemComponent } from './product-item.component';
import { AnimalType, Product } from 'src/app/interfaces/product';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {MatCard, MatCardContent, MatCardModule, MatCardTitle} from '@angular/material/card'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

const product: Product = {

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


describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductItemComponent,
        MockComponents(
          MatCard,
          MatCardTitle,
          MatCardContent,
          MatIcon,
        ),
      ],
      providers: [{
        provide: ProductsService,
        useClass: ProductServiceMock
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Esse teste vai sempre verificar se as estrelas do produto estão presentes no HTML
  it('should show five icon stars in html', () => {
    const html = fixture.nativeElement;
    // Get all matIcons
    const matIcons = document.getElementsByTagName('mat-icon');
    // Check matIcons count
    expect(matIcons.length).toEqual(5);
    // Check first mat icon
    expect(matIcons[0].textContent.trim()).toEqual('star');
  });


   it('should check  first item in HTML', () => {
    const html = fixture.nativeElement;
    const result = html.getElementsByClassName('name-product')[0].textContent;
    console.log(result)
    expect(result).toContain("Antipulgas e Carrapatos MSD Bravecto para C\u00e3es de 4,5 a 10 Kg");
  });

  it('should check  first value in HTML', () => {
    const html = fixture.nativeElement;
    const resultOriginal = html.getElementsByClassName('classeB')[0].textContent;
    const resultPromotional = html.getElementsByClassName('classeA')[0].textContent;
    console.log(resultOriginal)
    expect(resultOriginal).toContain("204.9");
    expect(resultPromotional).toContain("184.41");
  });

  it('should show stars with 3.5 rating star', () => {
    // Atualizando as estrelas do produto
    component.product.rating_stars = 3.5
    // Solicitando para que o HTML seja atualizado
    fixture.autoDetectChanges();

    const html = fixture.nativeElement;
    // Obtendo todos os matIcons no html
    const matIcons = document.getElementsByTagName('mat-icon');
    // Checando todos os icones
    expect(matIcons[0].textContent.trim()).toEqual('star');
    expect(matIcons[1].textContent.trim()).toEqual('star');
    expect(matIcons[2].textContent.trim()).toEqual('star');
    expect(matIcons[3].textContent.trim()).toEqual('star_half');
    expect(matIcons[4].textContent.trim()).toEqual('star_border');
  });

});
