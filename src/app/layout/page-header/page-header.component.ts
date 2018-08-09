import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/service/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../toast/toast.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  constructor(private authservice:AuthService, private router:Router, private toastservice:ToastService){ }

  signout(){
    localStorage.removeItem('userName');
    localStorage.removeItem("isAdmin");
    this.router.navigate(['login']);
    this.toastservice.activate("You have successfully sined out","info");
  }

  ngOnInit() {
  }

}
