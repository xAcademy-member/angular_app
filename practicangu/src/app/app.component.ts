import { Component } from '@angular/core';

type Product = { 'name': string, 'price': number };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  show: boolean = true;
  buttonLabel: string = 'Hide';

  toggle(){
    this.show = !this.show;
    this.buttonLabel = this.show ? 'Hide' : 'Show';
  }

  displayedColumns: string[] = ['name', 'price'];
  products: Product[] = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 10 },
    { name: 'Keyboard', price: 20 },
    { name: 'Headset', price: 30 },
  ];

  getTotal() {
    return this.products.map(p => p.price).reduce((acc, value) => acc + value, 0);
  }
}
