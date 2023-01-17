import { Component } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {Store} from "@ngrx/store";
import {addProduct} from "../../state/product/product.action";
import {Observable} from "rxjs";
import {ProductModel} from "../product.model";
import {getProducts} from "../../state/product/product.selector";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  public allProducts$:Observable<ProductModel[]> =
    this.store.select(getProducts)



  constructor(private store:Store) {}

  onSubmit(animalForm: NgForm) {
    const  name = animalForm.form.value.name
    const price = animalForm.form.value.price
    const img = animalForm.form.value.img
    this.store.dispatch(addProduct({imageURL:img, price: price, name:name}))
  }
}
