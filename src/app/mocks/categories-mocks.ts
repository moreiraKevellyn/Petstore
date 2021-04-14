import { Category } from '../interfaces/category';
import { Observable } from 'rxjs';


export class CategoriesServiceMock {

    constructor() { }

    getCategories(): Observable<Category[]> {
        return new Observable<Category[]>(observer => {

            observer.next([
                { id: 'dasdasd', name: 'Ração', subcategories: ['ração seca'], url: '', description: '' },
                { id: 'dasdasd', name: 'Brinquedos', subcategories: ['pelucia'], url: '', description: '' },
            ]);
            observer.complete();
        });
    };
}
