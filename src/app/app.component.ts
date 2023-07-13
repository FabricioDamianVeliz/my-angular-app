import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    { name: 'Producto 1', cost: '$10' },
    { name: 'Producto 2', cost: '$20' },
    { name: 'Producto 3', cost: '$30' }
  ];

  showList = true;

  toggleList() {
    this.showList = !this.showList;
  }
}

