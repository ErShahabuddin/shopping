import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chinise',
  templateUrl: './chinise.component.html',
  styleUrls: ['./chinise.component.css']
})
export class ChiniseComponent implements OnInit {

    items = [
      {name: 'Feel Chinese', price: 99, images:'../../../assets/sad.jpeg'},
      {name: 'Feel Chinese', price: 9, images1:'../../../assets/harun6.jpeg'},
    ];

    cartItems: any[]=[];
    isCartVisible:boolean = false;

    addItemToCart(item: any) {
      this.cartItems.push(item);
    }

    onToggleCart(){
      this.isCartVisible = (this.isCartVisible==false)?true:false;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
