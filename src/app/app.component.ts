import {Component, ElementRef, ViewChild, HostListener} from '@angular/core';
import MENU_ITEMS from "./core/constants/menu-items";
import {MenuItem} from './core/models/menu';
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute, NavigationEnd, Router,} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-template';
}
