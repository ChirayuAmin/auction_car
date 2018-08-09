import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarinfoService } from '../shared/service/carinfo.service';
import { ToastService } from '../toast/toast.service';
import { Car } from './car';

@Component({
  selector: 'app-carinfo',
  templateUrl: './carinfo.component.html',
  styleUrls: ['./carinfo.component.css']
})
export class CarinfoComponent implements OnInit {

  @ViewChild('f') f: NgForm;
  car: Car[];


  constructor(private carinfoService: CarinfoService, private toastService:ToastService) { }

  public model = {
    carId: 0, modelNumber: '', name: '', type: '', color: '', buildYear: '', manufacturerName: ''
  }

  bindcardetails() {
    this.carinfoService.getallcardetail().subscribe(
      res => {
        return this.car = res.json();
      },
      error => {
        if (error.status === 401) {
          //this.router.navigate(['/login']);
        }
        console.log(error.text());
      }
    )
  }

  onSave() {
    if (this.model.carId == 0) {
      this.carinfoService.createcar(this.model).subscribe(res => {
        if (res.json() === true) {
          this.toastService.activate("New car detail inserted successfully","info");
        }
      });
    }
    else {
      this.carinfoService.updatecar(this.model, this.model.carId).subscribe(res => {
        if (res.json() === true) {
          this.toastService.activate("The selected car updated successfully","info");
        }
      });
    }
  }

  editDetail(car) {
    this.model.carId = car.carId;
    this.model.modelNumber = car.modelNumber;
    this.model.name = car.name;
    this.model.type = car.type;
    this.model.color = car.color;
    this.model.buildYear = car.buildYear;
    this.model.manufacturerName = car.manufacturerName;
  }

  deleteDetail(carId) {
    this.carinfoService.deletecar(carId).subscribe(res=>{
      if(res.json()===true){
        this.toastService.activate("The selected car is deleted","info");
      }
    });
  }

  ngOnInit() {
    this.bindcardetails();
  }

}
