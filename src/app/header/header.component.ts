import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand" href="#" [routerLink]="['home']">Eviction Search App</a>
      <ul class="nav navbar-nav">
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" href="#" [routerLink]="['home']">Home</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" href="#" [routerLink]="['search']">Search</a>
        </li>
        <li class="nav-item" [routerLinkActive]="['active']">
          <a class="nav-link" href="#" [routerLink]="['info']">Info</a>
        </li>
      </ul>
    </nav>
 `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  goHome() {
    this.router.navigate(['']);
  }

  goSearch() {
    this.router.navigate(['search']);
  }

  goInfo() {
    this.router.navigate(['info']);
  }

  ngOnInit() {
  }

}
