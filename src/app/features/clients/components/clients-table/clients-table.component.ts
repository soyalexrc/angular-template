import {Component, OnInit, Output, ViewChild, AfterViewInit, EventEmitter} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Client} from "../../models";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatPaginator} from "@angular/material/paginator";

const CLIENTS_DATA: Client[] = [
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
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientsTableComponent implements OnInit, AfterViewInit {
  columnsToDisplay: string[] = ['name', 'phone', 'email', 'totalSold'];
  dataSource!: MatTableDataSource<Client>;
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Client | null;
  @Output() editClient: EventEmitter<any> = new EventEmitter<any>()
  @Output() deleteClient: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(CLIENTS_DATA)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
