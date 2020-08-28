import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';
import { UpDownServiceService } from '../services/up-down-service.service';
import {StatusResp} from '../models/status-resp';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-all-services',
    templateUrl: './all-services.component.html',
    styleUrls: ['./all-services.component.scss'],
    animations: [routerTransition()]
})
export class AllServicesComponent implements OnInit {

     StatusResps : StatusResp[] = [];

    constructor(private upDownServiceService :UpDownServiceService ) { }

    ngOnInit() {
    this.StatusResps;

    }
    UpStatus(){
        this.upDownServiceService.UpService()
            .subscribe(StatusResps => this.StatusResps =StatusResps)
    }
    DownStatus(){
        this.upDownServiceService.DownService()
            .subscribe(StatusResps => this.StatusResps =StatusResps)
    }


}
