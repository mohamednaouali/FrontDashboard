import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class UpDownServiceService {

    constructor(private  http: HttpClient) { }

    UpService() {

        alert('service is up');
        return this.http.get<any>('http://localhost:8762/service1/EurekaClient/up');


    }
    DownService() {
        alert('service is down');
        return this.http.get<any>('http://localhost:8762/service1/EurekaClient/down');
    }
    UpService2() {
        alert('service is up');
        return this.http.get<any>('http://localhost:8762/service2/EurekaClient/up');
    }
    DownService2() {
        alert('service is down');
        return this.http.get<any>('http://localhost:8762/service2/EurekaClient/down');
    }

    Downbackend() {
        alert('back-end-server is down');
        return this.http.get<any>('http://localhost:8762/back-end-server/welcome/down');
    }

    Upbackend() {
        alert('back-end-server is up');
        return this.http.get<any>('http://localhost:8762/back-end-server/welcome/up');
    }
}
