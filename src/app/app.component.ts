import { Component } from '@angular/core';

export interface ProductData {
  name: string;
  cost: string;
}

const NAMES: string[] = [
  'Washing Machine', 'Refrigerator', 'Television', 'Blender', 'Oven', 'Microwave', 'Vacuum Cleaner',
  'Coffee Maker', 'Mixer', 'Iron', 'Dryer', 'Fan', 'Toaster', 'Juicer', 'Kettle',
  'Fryer', 'Kitchen Robot', 'Air Conditioner', 'Stove', 'Teapot', 'Sandwich Maker', 'Steamer',
  'Water Dispenser', 'Water Heater', 'Alarm Clock', 'Electric Brush', 'Air Purifier'
];

const getRandomName = (): string => {
  const randomIndex = Math.floor(Math.random() * NAMES.length);
  return NAMES[randomIndex];
};

const PRODUCTS: ProductData[] = Array.from({ length: 10 }, (_, index) => ({
  name: getRandomName(),
  cost: `U$S ${Math.floor(Math.random() * 100) + 1}`
}));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataSource: ProductData[];
  filteredData: ProductData[];

  constructor() {
    this.dataSource = PRODUCTS;
    this.filteredData = this.dataSource;
  }

  showList = false;

  toggleList() {
    this.showList = !this.showList;
    if (this.showList) {
      this.filteredData = this.dataSource;
    } else {
      this.filteredData = [];
    }
  }
}











