import { Component } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {Store} from "@ngrx/store";
import {addProduct, updateProduct} from "../../state/product/product.action";
import {Observable} from "rxjs";
import {ProductModel} from "../product.model";
import {getProducts} from "../../state/product/product.selector";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  //store created
  public allProducts$:Observable<ProductModel[]> =
    this.store.select(getProducts)


//create store constructor
  constructor(private store:Store) {}


  //on submit product data add
  onSubmit(productForm: NgForm) {
    const  name = productForm.form.value.name
    const price = productForm.form.value.price
    const img = productForm.form.value.img
    const des = productForm.form.value.des
    const category = productForm.form.value.category
    this.store.dispatch(addProduct({imageURL:img, price: price, name:name,description:des,category:category}))
  }

}
