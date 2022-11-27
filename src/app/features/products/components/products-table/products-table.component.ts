import {Component, OnInit, Output, ViewChild, AfterViewInit, EventEmitter} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../models";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatPaginator} from "@angular/material/paginator";

const PRODUCTS_DATA: Product[] = [
  {
    name: 'Alex Rodriguez',
    document: '81668042',
    phone: '+51917902604',
    address: 'Direccion de ejemplo',
    addressComplement: 'Complemento de ejemplo',
    city: 'Ciudad de ejemplo',
    country: 'Pais de ejemplo',
    description: 'Descripcion de ejemplo',
    email: 'Email de ejemplo',
    img: '',
    totalSold: 2500
  },
  {
    name: 'Alex Rodriguez',
    document: '81668042',
    phone: '+51917902604',
    address: 'Direccion de ejemplo',
    addressComplement: 'Complemento de ejemplo',
    city: 'Ciudad de ejemplo',
    country: 'Pais de ejemplo',
    description: 'Descripcion de ejemplo',
    email: 'Email de ejemplo',
    img: '',
    totalSold: 2500
  },
  {
    name: 'Alex Rodriguez',
    document: '81668042',
    phone: '+51917902604',
    address: 'Direccion de ejemplo',
    addressComplement: 'Complemento de ejemplo',
    city: 'Ciudad de ejemplo',
    country: 'Pais de ejemplo',
    description: 'Descripcion de ejemplo',
    email: 'Email de ejemplo',
    img: '',
    totalSold: 2500
  },
  {
    name: 'Alex Rodriguez',
    document: '81668042',
    phone: '+51917902604',
    address: 'Direccion de ejemplo',
    addressComplement: 'Complemento de ejemplo',
    city: 'Ciudad de ejemplo',
    country: 'Pais de ejemplo',
    description: 'Descripcion de ejemplo',
    email: 'Email de ejemplo',
    img: '',
    totalSold: 2500
  },
  {
    name: 'Alex Rodriguez',
    document: '81668042',
    phone: '+51917902604',
    address: 'Direccion de ejemplo',
    addressComplement: 'Complemento de ejemplo',
    city: 'Ciudad de ejemplo',
    country: 'Pais de ejemplo',
    description: 'Descripcion de ejemplo',
    email: 'Email de ejemplo',
    img: '',
    totalSold: 2500
  },
  {
    name: 'Alex Rodriguez',
    document: '81668042',
    phone: '+51917902604',
    address: 'Direccion de ejemplo',
    addressComplement: 'Complemento de ejemplo',
    city: 'Ciudad de ejemplo',
    country: 'Pais de ejemplo',
    description: 'Descripcion de ejemplo',
    email: 'Email de ejemplo',
    img: '',
    totalSold: 2500
  },
  {
    name: 'Alex Rodriguez',
    document: '81668042',
    phone: '+51917902604',
    address: 'Direccion de ejemplo',
    addressComplement: 'Complemento de ejemplo',
    city: 'Ciudad de ejemplo',
    country: 'Pais de ejemplo',
    description: 'Descripcion de ejemplo',
    email: 'Email de ejemplo',
    img: '',
    totalSold: 2500
  },
];

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductsTableComponent implements OnInit, AfterViewInit {
  columnsToDisplay: string[] = ['name', 'phone', 'email', 'totalSold'];
  dataSource!: MatTableDataSource<Product>;
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Product | null;
  @Output() editProduct: EventEmitter<any> = new EventEmitter<any>()
  @Output() deleteProduct: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(PRODUCTS_DATA)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
