import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductsHighlights } from '../interfaces/products-highlights';
import { Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsHighlights(): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      // Faça o importe do environment para poder adicionar a url da aplicação
      console.log(`${environment.apiUrl}v1/products-highlights`);
      
      this.http.get<Product[]>(`${environment.apiUrl}v1/products-highlights`).subscribe(
        response => {
          observer.next(response);
          observer.complete();
        },
        () => { // Se der algum erro na requisição ira ser chamado esse callback
          observer.error('error_on_get_categories');
          observer.complete();
        }
      )
    });
  }

}


