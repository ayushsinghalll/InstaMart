import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {ProductState} from "./product.state";
import {
  addProduct,
  loadProduct,
  LoadProductSuccess,
  deleteProduct,
  updateProduct,
  updateProductSuccess, updateProductFailure, LoadProductFailure
} from "./product.action";
import {catchError, concatMap, from, map, mergeMap, of, switchMap, withLatestFrom} from "rxjs";

import {getProducts} from "./product.selector";
import {ProductService} from "../../service/product.service";

@Injectable()
export class ProductEffects{

  constructor(private action$:Actions,private store:Store<ProductState>,private productService:ProductService) {
  }

  loadProducts$ = createEffect(()=>{
    let err1 : string | any
    return this.action$
      .pipe(
        ofType(loadProduct),
        mergeMap(()=>this.productService.getProducts()
          .pipe(map(products=>LoadProductSuccess({products})),
            catchError(error => of(LoadProductFailure({error})))))

      )
  })

  saveProducts$ = createEffect(()=> this.action$.pipe(
      ofType(addProduct,deleteProduct),
      withLatestFrom(this.store.select(getProducts)),
      switchMap(([action,products])=>from(this.productService.createProduct(products[0])))
    ),
    { dispatch: false }
  )

  updateProduct$ = createEffect(() => {
    return this.action$
      .pipe(
        ofType(updateProduct),
        concatMap(action =>
          this.productService.updateProduct(action.products)
            .pipe(
              map(products => updateProductSuccess({ products })),
              catchError(error => of(updateProductFailure({ error })))
            )
        )
      );
  });


}
