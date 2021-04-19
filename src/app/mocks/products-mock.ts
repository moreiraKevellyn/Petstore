
import { Observable } from 'rxjs';
import { AnimalType, Product } from '../interfaces/product';

export class ProductServiceMock {

    product: Product = {
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

    constructor() { }

    getProduct(id: string): Observable<Product> {
        return new Observable<Product>(observer => {
            observer.next(this.product)
            observer.complete()
        })
    }

    getProductsHighlights(): Observable<Product[]> {
        return new Observable<Product[]>(observer => {
            observer.next([this.product]);
            observer.complete();
        });
    };
}