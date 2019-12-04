import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.css']
})
export class MountainComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
  }

  onNavigate(): void {
    this.router.back();
    }

}
