import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-table-header',
  templateUrl: './content-table-header.component.html',
  styleUrls: ['./content-table-header.component.scss']
})
export class ContentTableHeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() amount!: string | number;

  constructor() { }

  ngOnInit(): void {
  }

}
