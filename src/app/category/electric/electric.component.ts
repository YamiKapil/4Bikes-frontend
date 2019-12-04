import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-electric',
  templateUrl: './electric.component.html',
  styleUrls: ['./electric.component.css']
})
export class ElectricComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
  }

  onNavigate(): void{
      this.router.back();
  }

}
