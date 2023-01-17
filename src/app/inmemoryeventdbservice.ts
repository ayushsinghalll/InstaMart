import {InMemoryDbService} from "angular-in-memory-web-api";
import {Injectable} from "@angular/core";
import {User} from "./login/user";
import {ProductModel} from "./admin/product.model";

@Injectable(
  {
    providedIn:'root'
  }
)
export class Inmemoryeventdbservice implements InMemoryDbService{
  createDb() {
    const users:User[]=[{
      id:1,
      userName:'ayush',
      password:'ayush',
      isAdmin:true},

      { id:2,
        userName:'chaman',
        password:'chaman',
        isAdmin:false},

      { id:3,
        userName:'dev',
        password:'dev',
        isAdmin:false}
    ]
    const products:ProductModel[]=[
      {
        id:'1',
        name:'Apple',
        price:45,
        imageURL:"../../assets/images/apple.jpg"
      },
      {
        id:'2',
        name:'Tomato',
        price:45,
        imageURL:"../../assets/images/tomato.jpg"
      }
    ]
    return {users,products}
  }
}
