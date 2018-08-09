import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public isAdmin=JSON.parse(localStorage.getItem('authorizationData')).isManager;
  constructor() { }

  ngOnInit() {
  }

}
