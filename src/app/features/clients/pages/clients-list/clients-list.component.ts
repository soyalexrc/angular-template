import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from "@angular/material/table";







@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  goToDetail() {
    alert('edit client')
  }

  deleteClient() {
    alert('delete client')
  }

  createClient() {
    alert('create client')
  }
}
