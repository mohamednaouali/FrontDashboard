import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Service1} from '../Class/service1';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Service2} from '../Class/service2';

@Injectable({
    providedIn: 'root'
})
export class DataFetchService {

    apiURL = 'http://localhost:8761//MetadataProvider/Service1Info';
    apiURL2 = 'http://localhost:8761//MetadataProvider/Service2Info';
    apiURL3 = 'http://localhost:8761//MetadataProvider/back-end-Info';

    constructor( private  http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'

        })
    }
    getService1(): Observable<Service1> {
        return this.http.get<Service1>(this.apiURL  )
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    getService2(): Observable<Service2> {
        return this.http.get<Service2>(this.apiURL2)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }
    getbackend(){
        return this.http.get(this.apiURL3)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )

    }

    handleError(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}






