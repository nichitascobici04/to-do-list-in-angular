import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { testItem } from '../shared/models/testItem';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) {}
  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  getItems() {
    let options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject: {
        format: "json"
      }
    });
    return this.http.get('/assets/items.json', options).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status == 0) {
      console.error('Ceva de la retea sau de la tine:', error.error);
    } else {
      console.error('Ceva de la server:', error.error);
    }
    return throwError(() => new Error('Ceva a patit serverul :('));
  }
  private addItem(item: testItem) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set("Authorization", "Banana");
    this.http.post('/assets/items.json', item, options);
  }
}