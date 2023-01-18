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
        name:'Fortune Oil',
        price:199,
        imageURL:"../../assets/images/grocery1.jpg",
        description:'Fortune Oil, 1 L Pouch Premium Kachi Ghani Pure Mustard',
        category:'Grocery'
      },
      {
        id:'2',
        name:'Aashirvaad Atta',
        price:450,
        imageURL:"../../assets/images/grocery2.jpg",
        description: 'Aashirvaad Shudh Chakki Atta, 10kg Pack',
        category: 'Grocery'

      },
      {
        id:'3',
        name:'Zandu Pure Honey',
        price:185,
        imageURL:"../../assets/images/grocery4.jpg",
        description:'FZandu Pure Honey, 100% Purity, No Added Sugar, 500g',
        category:'Grocery'
      },
      {
        id:'1',
        name:'Fortune Oil',
        price:190,
        imageURL:"../../assets/images/grocery3.jpg",
        description:'Fortune Oil, 1 L Pouch Rice Bran Health',
        category:'Grocery'
      },
      {
        id:'5',
        name:'Maggi',
        price:45,
        imageURL:"../../assets/images/grocery5.jpg",
        description:'Maggi 2-Minute Masala Instant Noodles, 70 grams (Pack of 12)',
        category:'Grocery'
      },
      {
        id:'6',
        name:'Samsung Galaxy ',
        price:7999,
        imageURL:"../../assets/images/mobile1.jpg",
        description:'M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery',
        category:'Mobile'
      },
      {
        id:'7',
        name:'realme narzo',
        price:6950,
        imageURL:"../../assets/images/mobile2.jpg",
        description:'realme narzo 50i (Carbon Black, 2GB RAM+32GB Storage) Octa Core Processor | 6.5" inch Large Display',
        category:'Mobile'
      },
      {
        id:'8',
        name:'OPPO A74 5G ',
        price:15999,
        imageURL:"../../assets/images/mobile3.jpg",
        description:'OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost EMI/Additional Exchange Offers',
        category:'Mobile'
      },
      {
        id:'9',
        name:'Redmi 10A ',
        price:7950,
        imageURL:"../../assets/images/mobile4.jpg",
        description:'Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster',
        category:'Mobile'
      },
      {
        id:'10',
        name:'realme narzo 50',
        price:1199,
        imageURL:"../../assets/images/mobile5.jpg",
        description:'realme narzo 50 (Speed Blue, 4GB RAM+64GB Storage) 120Hz Full HD+ Display | 50MP AI Triple Camera | Helio G96 Powerful Gaming Processor',
        category:'Mobile'
      },
      {
        id:'11',
        name:'SENS EDYSON 2 Smartwatch',
        price:1199,
        imageURL:"../../assets/images/electronics1.jpg",
        description:'SENS EDYSON 2 Smartwatch with 1.32 Round IPS Display with BT Calling, 150+ Watch Faces & Free Additional Strap',
        category:'Electronics'
      },
      {
        id:'12',
        name:'Dell Vostro',
        price:49000,
        imageURL:"../../assets/images/electronics2.jpg",
        description:'Dell Vostro 14-inch Laptop (35.56 cms) | Windows 11, MS Office H&S 2021 | Intel i5-1135G7 | 8GB DDR4, 512GB',
        category:'Electronics'
      },
      {
        id:'13',
        name:'UBON Power Champ',
        price:426,
        imageURL:"../../assets/images/electronics3.jpg",
        description:'UBON Power Champ 2.0 Cordless Extension Board with USB Ports & 3 Universal Sockets with Individual Switc',
        category:'Electronics'
      },
      {
        id:'14',
        name:'PGSA2Z ® Electronics Basic Kit',
        price:426,
        imageURL:"../../assets/images/electronics4.jpg",
        description:'PGSA2Z ® Electronics Basic Kit for Components Project Starter Kit (43 Item 100 Components) Multicolor',
        category:'Electronics'
      },
      {
        id:'15',
        name:'ZEBRONICS Zeb-Thunder',
        price:500,
        imageURL:"../../assets/images/electronics5.jpg",
        description:'ZEBRONICS Zeb-Thunder Bluetooth Wireless Over Ear Headphone FM, mSD, 9 hrs Playback with Mic (Black)',
        category:'Electronics'
      },
      {
        id:'16',
        name:'LEOTUDE',
        price:289,
        imageURL:"../../assets/images/fashion1.webp",
        description:'Regular Fit Half Sleeve Polo T-Shirt for Men',
        category:'Fashion'
      },
      {
        id:'17',
        name:'Amazon Brand - Symbol',
        price:500,
        imageURL:"../../assets/images/fashion2.jpg",
        description:'Amazon Brand - SymbolMen Regular Fit T-Shirt',
        category:'Fashion'
      },
      {
        id:'18',
        name:'Amazon Brand - Symbol',
        price:500,
        imageURL:"../../assets/images/fashion3.jpg",
        description:'Amazon Brand - Symbol Men Regular Fit T-Shirt',
        category:'Fashion'
      },
      {
        id:'19',
        name:'Levi',
        price:1499,
        imageURL:"../../assets/images/fashion4.jpg",
        description:'Men\'s 511 Slim Fit Jeans',
        category:'Fashion'
      },
      {
        id:'20',
        name:'Lee',
        price:1162,
        imageURL:"../../assets/images/fashion5.jpg",
        description:'Men\'s (Rodeo) Comfort Fit Regular Leg Jeans',
        category:'Fashion'
      },




    ]
    return {users,products}
  }
}
