import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICategory } from './category';
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class CategoryService {

  categoriesUrl: string = "http://lavendor.dev.sds-works.com/api/categories";

  constructor(private http: HttpClient) { }
  categories: any = [];

  getCategories(): Observable<any> {

    return this.http.get<any>(this.categoriesUrl).pipe(
      catchError(this.handleError)
    )


    // subscribe({
    //   next: cats=> console.log(cats)
    // });
    // console.log(this.categories);
    // return [
    //   {
    //     id: 1,
    //     name: "cat1",
    //     image: "https://images.pexels.com/photos/1124960/pexels-photo-1124960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    //   },
    //   {
    //     id: 1,
    //     name: "cat1",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNP9igTKHQEtMfNO4mBZRNF8d8CFs42-HJ7Q&usqp=CAU"
    //   }
    // ];
  }
  private handleError(err: HttpErrorResponse) {
    return throwError('fuck');
  }
}
