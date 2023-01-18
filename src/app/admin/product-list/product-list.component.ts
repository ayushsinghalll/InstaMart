import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ProductModel} from "../product.model";
import {getProducts} from "../../state/product/product.selector";
import {Store} from "@ngrx/store";
import {loadProduct} from "../../state/product/product.action";
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  pageTitle='Edit Product';

  //create store
  public allProducts$:Observable<ProductModel[]> =
    this.store.select(getProducts)

  public products = '';
  constructor(private store:Store,private cartService : CartService) {}

  //load the product
  ngOnInit() : void{
    console.log('in init')
    this.store.dispatch(loadProduct())
  }
  //add cart in the product
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}
