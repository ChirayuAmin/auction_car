import { Component, OnInit } from '@angular/core';
import { login } from './login';
import { AuthService } from '../shared/service/auth.service';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: login = new login();

  constructor(private authservice: AuthService, private router: Router, private toastService:ToastService) { }

  login() {
    //this.router.navigateByUrl("displaycars");
    this.authservice.signIn(this.model).subscribe(
      response => {
        if (response) {
          localStorage.setItem('userName',response.json().userName);
          localStorage.setItem('isAdmin',response.json().isAdmin);
        }
      },
      error => {
        // console.log(error.text());
      }
    );
  }

  logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem("isAdmin");
    this.toastService.activate(`Successfully logged out`);
  }

  ngOnInit() {
    document.body.classList.remove("skin-blue");
    document.body.classList.add('login-page');
  }

}
