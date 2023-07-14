import { Component } from '@angular/core';

interface Item {
  name: string;
  cost: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Item[] = [
    { name: 'Producto 1', cost: '$10' },
    { name: 'Producto 2', cost: '$20' },
    { name: 'Producto 3', cost: '$30' }
  ];

  showList = true;

  toggleList() {
    this.showList = !this.showList;
  }
}




