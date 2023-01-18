import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, inject, TestBed } from "@angular/core/testing";

import { of } from "rxjs";

import { ProductService } from "./product.service"
import {FormsModule} from "@angular/forms";
import {Store, StoreModule} from "@ngrx/store";

describe('ProductService',()=>{
  let service:ProductService;

  let injector: TestBed;

  let httpMock: HttpTestingController;

  let  items:any[]=[];
  afterEach(() => {
    httpMock.verify();
  });
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,
      FormsModule, StoreModule.forRoot({})],
      providers:[ProductService],
    });
    service=TestBed.get(ProductService);


    injector = getTestBed();

    httpMock = injector.get(HttpTestingController);
    items=[

      {

        id:111,
        name:"apples",
        category:"grocery",

        price:200,
        image:"../../assets/images/mangoes.jpg",
        description:'this is a apple'

      }]

  });
  it('should be created',()=>{
    expect(service).toBeTruthy();
  })
  it('should getAllProducts',
    inject([HttpTestingController,ProductService],
      (httpMock:HttpTestingController,service:ProductService)=>{
        service.getProducts().subscribe(resp=>expect(items).toEqual(resp));
        const mockReq = httpMock.expectOne(service.url);
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(items);


      }
    ));
  it('updateProduct () should update  a product and    return updated product as data',()=>{

    let item2 ={

      id:'1',
      name:"mangoes",
      category:'grocery',

      price:300,
      imageURL:"../../assets/images/mangoes.jpg",
     description:'njbn'

    };

    service.updateProduct(item2).subscribe(resp=>expect(resp).toEqual(item2) )


    const req = httpMock.expectOne(`${service.url}/${item2.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush({item2 });

  })



});

