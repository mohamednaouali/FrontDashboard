import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';
import { UpDownServiceService } from '../services/up-down-service.service';
import { DataFetchService } from '../services/data-fetch.service';
import {Service1} from '../Class/service1';



@Component({
    selector: 'app-all-services',
    templateUrl: './all-services.component.html',
    styleUrls: ['./all-services.component.scss'],
    animations: [routerTransition()]
})
export class AllServicesComponent implements OnInit {
    Service1 : any = [];
    Service2 : any = [];

    constructor(private upDownServiceService :UpDownServiceService ,private dataFetchService  :DataFetchService) { }
d
    ngOnInit() {
         this. loadService1();
         this.loadService2()
    }

    UpStatus(){
        this.upDownServiceService.UpService()
            .subscribe()
    }
    DownStatus(){
        this.upDownServiceService.DownService()
            .subscribe()
    }

    UpStatus2(){
        this.upDownServiceService.UpService2()
            .subscribe()
    }
    DownStatus2(){
        this.upDownServiceService.DownService2()
            .subscribe()
    }

    loadService1(){

        return this.dataFetchService.getService1().subscribe((data: {}) => {
            this.Service1 =data ;
            console.log(data)
        })
    }
    loadService2(){

        return this.dataFetchService.getService2().subscribe((data: {}) => {
            this.Service2 =data ;
            console.log(data)
        })
    }

}
