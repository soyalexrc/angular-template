import {Component, OnInit, Output, ViewChild, AfterViewInit, EventEmitter} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Transaction} from "../../models";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatPaginator} from "@angular/material/paginator";

const TRANSACTIONS_DATA: Transaction[] = [
  {
    title: 'Gastos de biaticos',
    coin: 'USD',
    hasClient: true,
    hasService: false,
    hasOrder: false,
    hasProvider: false,
    order: null,
    service: null,
    client: {},
    provider: null,
    isIsolatedTransaction: false,
    code: 'OPG-16',
    date: '2019-02-01T03:45:27Z',
    evidence: [
      {
        title: 'Evidencia de ejemplo',
        url: 'https://google.com'
      },
      {
        title: 'Evidencia de ejemplo',
        url: 'https://google.com'
      },
    ],
    description: 'Descripcion de ejemplo',
    type: 'Gastos',
    value: 2500
  },
  {
    title: 'Pago de pedido',
    coin: 'USD',
    hasClient: false,
    hasService: false,
    hasOrder: true,
    hasProvider: false,
    order: {},
    service: null,
    client: null,
    provider: null,
    isIsolatedTransaction: false,
    code: 'OPG-14',
    date: '2019-02-01T03:45:27Z',
    evidence: [
      {
        title: 'Evidencia de ejemplo',
        url: 'https://google.com'
      },
      {
        title: 'Evidencia de ejemplo',
        url: 'https://google.com'
      },
    ],
    description: 'Descripcion de ejemplo',
    type: 'Ingresos',
    value: 2500
  },
];

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionsTableComponent implements OnInit, AfterViewInit {
  columnsToDisplay: string[] = ['code', 'title', 'date', 'value', 'type'];
  dataSource!: MatTableDataSource<Transaction>;
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Transaction | null;
  @Output() editTransaction: EventEmitter<any> = new EventEmitter<any>()
  @Output() deleteTransaction: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(TRANSACTIONS_DATA)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getPaymentDataFrom(element: Transaction) {
    if (element.hasClient) {
      return 'Pago de cliente'
    }

    if (element.hasService) {
      return 'Pago de servicio'
    }

    if (element.hasOrder) {
      return 'Pago de pedido'
    }

    if (element.hasProvider) {
      return 'Pago a proveedor'
    }

    if (element.isIsolatedTransaction) {
      return 'Pago aislado (no regular)'
    }

    else {
      return;
    }
  }

  getPaymentUserTypeFrom(element: Transaction) {
    if (element.client) {
      return ['Cliente:', 'Pepito Perez']
    }

    if (element.service) {
      return ['Servicio:', 'Servicio de transporte Millonary']
    }

    if (element.order) {
      return ['Orden:', 'Pedido de carlos reyes - el tigre 15/09/2022']
    }

    if (element.provider) {
      return ['Proveedo:r', 'Carla perez']
    }

    else {
      return ['', ''];
    }
  }

  openLink(url: string) {
    window.open(url, '_blank')
  }
}
