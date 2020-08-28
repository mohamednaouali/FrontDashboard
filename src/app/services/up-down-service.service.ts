import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StatusResp} from '../models/status-resp';

@Injectable({
  providedIn: 'root'
})
export class UpDownServiceService {

  constructor(private  http: HttpClient) { }

    UpService(){
        alert("service is up");
      return this.http.get<StatusResp[]>('http://localhost:8762/service2/EurekaClient/up');

  }
  DownService(){
      alert("service is down");
      return this.http.get<StatusResp[]>('http://localhost:8762/service2/EurekaClient/down');
  }
}
