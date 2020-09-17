import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';
import { UpDownServiceService } from '../services/up-down-service.service';
import { DataFetchService } from '../services/data-fetch.service';


@Component({
    selector: 'app-all-services',
    templateUrl: './all-services.component.html',
    styleUrls: ['./all-services.component.scss'],
    animations: [routerTransition()]
})
export class AllServicesComponent implements OnInit {
    Service1: any = [];
    Service2: any = [];
    backend:  any = [];

    constructor(private upDownServiceService: UpDownServiceService , private dataFetchService: DataFetchService) {
    }


    ngOnInit() {
        this. loadService1();
        this.loadService2();
        this.loadbackend();
    }

    UpStatus() {
        this.upDownServiceService.UpService()
            .subscribe();
    }
    DownStatus() {
        this.upDownServiceService.DownService()
            .subscribe();
    }

    UpStatus2() {
        this.upDownServiceService.UpService2()
            .subscribe();
    }
    DownStatus2() {
        this.upDownServiceService.DownService2()
            .subscribe();
    }
    Downbackend() {
        this.upDownServiceService.Downbackend()
            .subscribe();
    }
    Upbackend() {
        this.upDownServiceService.Upbackend()
            .subscribe();
    }


    loadService1() {

        return this.dataFetchService.getService1().subscribe((data: {}) => {
            this.Service1 = data ;
            console.log(data);
        });
    }
    loadService2() {

        return this.dataFetchService.getService2().subscribe((data: {}) => {
            this.Service2 = data ;
            console.log(data);
        });
    }
    loadbackend() {
        return this.dataFetchService.getbackend().subscribe((data: {}) => {
            this.backend = data ;
            console.log(data);
        });



    }

}
