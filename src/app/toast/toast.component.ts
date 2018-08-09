import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService, ToastMessage } from './toast.service';
import { MatSnackBar } from '@angular/material';

@Component({
  //moduleId:module.id,
  selector: 'app-toast',
  template: '',
  //styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnDestroy {

  private defaults={
    type:'',
    message:'fff'
  }
  private toastElement:any;
  private toastSubscription:Subscription;

  constructor(private toastservice:ToastService, public snackBar: MatSnackBar) {
    this.toastSubscription=this.toastservice.toastState.subscribe((toastMessage)=>{
      this.activate(toastMessage.message,toastMessage.type);
    });
   }

  activate(message=this.defaults.message,type=this.defaults.type){
    this.show(message,type);
  }

  ngOnDestroy(){
    this.toastSubscription.unsubscribe();
    this.snackBar.dismiss();
  }

  private show(message:string,type:string){
    this.snackBar.open(message,type,{duration:3000,});
  }

}
