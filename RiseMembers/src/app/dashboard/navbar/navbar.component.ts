import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected ds: DashboardService, protected router: Router) { }

  ngOnInit() {
  }

  toggle() {
    if (getComputedStyle(document.getElementById('toggler'), null).display !== 'none') {
      document.getElementById('toggler').click();
    }
  }

}
