import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllServicesRoutingModule } from './all-services-routing.module';
import { AllServicesComponent } from './all-services.component';
import {PageHeaderModule} from '../shared/modules';

@NgModule({
  imports: [CommonModule, AllServicesRoutingModule, PageHeaderModule],
    declarations: [AllServicesComponent]
})
export class AllServicesModule { }
