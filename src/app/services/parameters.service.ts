import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parameters } from '../interfaces/parameters';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor(private http: HttpClient) { }

  getParameters(): Observable<Parameters> {
    return new Observable<Parameters>(observer => {
      // Faça o importe do environment para poder adicionar a url da aplicação
      this.http.get<Parameters>(`${environment.apiUrl}v1/parameters`).subscribe(
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
