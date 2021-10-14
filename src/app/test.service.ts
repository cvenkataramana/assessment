import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) 
  { }

  getData():Observable<any>
  {
    return this.http.get('https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json');
  }
}
