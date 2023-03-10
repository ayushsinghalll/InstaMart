import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }
  //remove the item
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  //when user click cart is empty
  emptycart(){
    this.cartService.removeAllCart();
  }


  hasCart() {
    return this.cartService.cartItemList.length>0
  }
}
