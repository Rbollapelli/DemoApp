import { Stepper } from './../model/Stepper';
import { ServiceService } from './../service/service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stepperdisp',
  templateUrl: './stepperdisp.component.html',
  styleUrls: ['./stepperdisp.component.scss']
})
export class StepperdispComponent {

stepperList!:Stepper[];

  constructor(private ser:ServiceService){
  }
  ngOnInit():void{
    this.ser.GetstepperList().subscribe((data)=>{
      this.stepperList=data;
    });
  }
}
