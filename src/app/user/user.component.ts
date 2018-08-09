import { Component, OnInit, ViewChild } from '@angular/core';
import { Usermodel, tbluser } from './users';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/service/user.service';
//import { ToastService } from '../../core/toast/toast.service';
//import { CORECONFIG } from '../../core/core.config';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   ngOnInit() {
      this.getalluser();
  }

  @ViewChild('f') f: NgForm;
  model: Usermodel = new Usermodel();
  userslist:tbluser[];
  validatepass:boolean=false;

  constructor(private userService: UserService) { }

  onSave() {
    if (this.model.password != this.model.confirmPassword) {
      this.validatepass=true;
    }
    else {
      this.validatepass=false;
      if (this.model.userId == 0) {
        this.userService.insertuser(this.model).subscribe(res => {
          if (res.json() === true) {
            //this.tosatService.activate("User saved successfully", CORECONFIG.alertMessage.Success);
          }
        });
      }
      else {
        this.userService.updateuser(this.model).subscribe(res => {
          if (res.json() === true) {
            //this.tosatService.activate("User updated successfully", CORECONFIG.alertMessage.Success);
          }
        });
      }
      this.f.resetForm();
      this.getalluser();
    }
  }

  editDetail(users: tbluser) {
    this.model.userId = users.userId;
    this.model.name = users.name;
    this.model.email = users.email;
    this.model.password = users.password;
    this.model.confirmPassword = users.password;
    this.model.isManager = users.isManager;
  }

  checkpassword(confrimPassword, password) {
    if (confrimPassword != password) {
      this.validatepass=true;
    }
    else
    {
      this.validatepass=false;
    }
  }

  clearControl() {
    this.f.resetForm();
  }

  getalluser(){
    this.userService.binduser().subscribe(res=>{
      this.userslist=res.json();
    });
  }

  
}
