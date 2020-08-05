import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss'],
    animations: [routerTransition()]
})
export class AllServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
