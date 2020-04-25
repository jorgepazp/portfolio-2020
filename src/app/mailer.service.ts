import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Contacto} from './modelos/contacto';


@Injectable({
  providedIn: 'root'
})
export class MailerService {
  
  errorData: {};
  formData = new FormData();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': '*',
      
      //'Access-Control-Request-Method': 'POST ',
 
    })
  };
  private url = 'https://www.ancla.tech/contactscript.php/';
  constructor(private http:HttpClient) {

  }

  performGetEx(contact:Contacto):Observable<any>{
      return this.http.post(this.url,contact,this.httpOptions).pipe(
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      console.log(error);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
