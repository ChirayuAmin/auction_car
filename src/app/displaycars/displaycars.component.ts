import { Component, OnInit } from '@angular/core';
import { Car } from '../carinfo/car';
import { CarDisplayService } from '../shared/service/car-display.service';
import { CarinfoService } from '../shared/service/carinfo.service';

@Component({
  selector: 'app-displaycars',
  templateUrl: './displaycars.component.html',
  styleUrls: ['./displaycars.component.css']
})
export class DisplaycarsComponent implements OnInit {

  car: Car[];

  constructor(public carDisplayService: CarDisplayService, public carinfoService: CarinfoService) { }

  getcars(name, modelNumber) {
    if (name != '' || modelNumber != '') {
      this.carDisplayService.getcars(name, modelNumber).subscribe(res => {
        return this.car = res.json();
      });
    }
    else{
      this.carinfoService.getallcardetail().subscribe(res => {
        return this.car = res.json();
      });
    }
  }

  displayallcar() {
    this.carinfoService.getallcardetail().subscribe(res => {
      return this.car = res.json();
    });
  }

  ngOnInit() {
    this.displayallcar();
  }

}
