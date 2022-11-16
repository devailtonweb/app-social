import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { ListCompaniesComponent } from './list-companies/list-companies.component';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ListCompaniesComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    SharedModule
  ]
})
export class CompaniesModule { }
