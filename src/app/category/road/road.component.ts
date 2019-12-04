import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.css']
})
export class RoadComponent implements OnInit {

  constructor( private router: RouterExtensions) { }

  ngOnInit() {
  }

  onNavigate(): void {
    this.router.back();
    }

}
