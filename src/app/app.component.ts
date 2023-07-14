import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ProductData {
  id: string;
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

const PRODUCTS: ProductData[] = Array.from({ length: 100 }, (_, index) => ({
  id: (index + 1).toString(),
  name: getRandomName(),
  cost: `U$S ${Math.floor(Math.random() * 100) + 1}`
}));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'cost'];
  dataSource: MatTableDataSource<ProductData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(PRODUCTS);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showTable = false;

  toggleTable() {
    this.showTable = !this.showTable;
    if (this.showTable) {
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }
  
}







