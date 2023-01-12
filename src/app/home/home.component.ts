import {Component, NgModule, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {
  slides: any[] = new Array(5).fill({id: -1, src: '', title: '', subtitle: ''});
  cards: any[] = new Array(4).fill({id:-1,src:'',heading:''})
  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: 'assets/images/caro1.jpg',
    };
    this.slides[1] = {
      src: 'assets/images/caro2.jpg',
    }
    this.slides[2] = {
      src: 'assets/images/caro3.jpg',
    }
    this.slides[3] = {
      src: 'assets/images/caro4.jpg',
    }
    this.slides[4] = {
      src: 'assets/images/caro5.jpg',
    }
    this.cards[0] = {
      src: 'assets/images/fashion.jpg',
      heading:'Fashion'
    }
    this.cards[1] = {
      src: 'assets/images/electronics.jpg',
      heading:'Electronic'
    }
    this.cards[2] = {
      src: 'assets/images/grocery.jpg',
      heading:'Grocery'
    }
    this.cards[3] = {
      src: 'assets/images/mobile.jpg',
      heading:'mobile'
    }
  }


}
