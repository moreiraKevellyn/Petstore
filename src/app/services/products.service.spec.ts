import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AnimalType, Product } from '../interfaces/product';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test get products highlights', () => {
    service.getProductsHighlights().subscribe(response => {
      //tratar a resposta
      //expect(response.length).toEqual(1)
      //expect(response[0].animal_type).toEqual('cachorro')
    })

    const mockRequest = httpTestingController.expectOne("https://petshop-sp.ue.r.appspot.com/v1/products-highlights")

    //expect GET
  
    mockRequest.flush(fakeResponse)  
  })
});


const fakeResponse: Array<Product> = [
  {
    "id": "id",
    "name": "Food",
    "description": "string",
    "value": 0,
    "promotional_value": 0,
    "featured_image": "string",
    "images": [
      "string"
    ],
    "videos": [
      "string"
    ],
    "rating_stars": 0,
    "rating_count": 0,
    "installment_available": true,
    "installment_count": 0,
    "featured": true,
    "category": "string",
    "subcategory": "string",
    "animal_type": AnimalType.Dog,
    "url": "string",
    "created_at": "string"
  }
]