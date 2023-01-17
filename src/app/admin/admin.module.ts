import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from "./product-routing.module";
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "../state/product/product.effects";
import {productReducer} from '../state/product/product.reducer'


@NgModule({
  declarations: [
    ProductComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductEditComponent
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature(ProductEffects),
    ReactiveFormsModule
  ]
})
export class AdminModule { }
