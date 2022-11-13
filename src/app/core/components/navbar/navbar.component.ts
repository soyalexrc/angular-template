import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Output() openSidebar: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  signOut() {
    this.router.navigate(['/iniciar-sesion'])
  }

  handleNotificationsClosed($event: any) {
    console.log($event);
  }
}
