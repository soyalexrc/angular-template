import { Component, OnInit } from '@angular/core';
import {SampleService} from "../../services/sample.service";

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss']
})
export class PageAComponent implements OnInit {

  public data: any;

  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
    this.sampleService.getRandomUser().subscribe(res => {
      console.log(res);
    })
  }

}
