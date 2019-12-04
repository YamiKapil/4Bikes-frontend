import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor( private router: RouterExtensions) { }

  ngOnInit() {
  }

  onNavigate(): void{
      this.router.back();
  }

}
