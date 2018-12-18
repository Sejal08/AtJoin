import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickModule } from 'ngx-slick';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './product/details/details.component';
import { ATjoinComponent } from './ATjoin.component';

const routes: Routes = [
    {path: 'atjoin', component: ATjoinComponent,
    children: [
      {path: 'about', component: AboutComponent},
      {path: 'service', component: ServiceComponent},
      {path: 'product', component: ProductComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'product/:id', component: DetailsComponent},
    ]
  }
  ];

@NgModule({
   declarations: [
      AboutComponent,
      ContactComponent,
      ServiceComponent,
      ProductComponent,
      DetailsComponent,
      ATjoinComponent
   ],
   imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SlickModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
   ],
   providers: [],

})

export class ATjoinModule { }
