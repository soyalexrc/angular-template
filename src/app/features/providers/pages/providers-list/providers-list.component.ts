import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss']
})
export class ProvidersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createProvider() {
    alert('create provider')
  }

  goToDetail() {
    alert('edit provider')
  }

  deleteProvider() {
    alert('delete provider')
  }
}
