import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-services-list',
  templateUrl: './external-services-list.component.html',
  styleUrls: ['./external-services-list.component.scss']
})
export class ExternalServicesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToDetail() {
    alert('detalle de servicio');
  }

  deleteExternalService() {
    alert('Delete external service');
  }

  createExternalService() {
    alert('create external service')
  }
}
