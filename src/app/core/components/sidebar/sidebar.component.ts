import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MenuItem} from "../../models/menu";
import MENU_ITEMS from "../../constants/menu-items";
import {NavigationEnd, Router} from "@angular/router";
import {distinctUntilChanged, filter, tap} from "rxjs";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: Array<MenuItem> = MENU_ITEMS
  currentRoute: string = '';
  @Input() isSidebarOpen!: boolean;
  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter<any>();
  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';
  readonly breakpoint$ = this.breakpointObserver.observe(
    [
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall,
      Breakpoints.XLarge
    ])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );


  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd &&
          router.url.split('/')[1] != this.currentRoute),
      )
      .subscribe((val) => {
        this.currentRoute = router.url;
      });
  }


  ngOnInit(): void {
    this.breakpoint$.subscribe((data) => {
      this.breakpointChanged()
    });
  }

  private breakpointChanged() {
    if(this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large;
    } else if(this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
    } else if(this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint = Breakpoints.Small;
    }  else if(this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.currentBreakpoint = Breakpoints.XSmall;
    }  else if(this.breakpointObserver.isMatched(Breakpoints.XLarge)) {
      this.currentBreakpoint = Breakpoints.XLarge;
    }
  }

  isSmallScreen() {
    return this.currentBreakpoint === Breakpoints.XSmall || this.currentBreakpoint === Breakpoints.Small
  }



  goTo(path: string) {
    this.router.navigate([path])
  }
}
