import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-kinder',
  templateUrl: './kinder.component.html',
  styleUrls: ['./kinder.component.css']
})
export class KinderComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
  }

  onNavigate(): void {
      this.router.back();
  }

}
