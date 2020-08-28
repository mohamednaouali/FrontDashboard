import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AllServicesRoutingModule } from './all-services-routing.module';
import { AllServicesComponent } from './all-services.component';
import {PageHeaderModule} from '../shared/modules';

@NgModule({
    imports: [CommonModule, AllServicesRoutingModule, PageHeaderModule, HttpClientModule],
    declarations: [AllServicesComponent]
})
export class AllServicesModule {


}
