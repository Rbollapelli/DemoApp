import { ServiceService } from './../service/service.service';
import { Stepper } from './../model/Stepper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  
  completed:boolean=false;
  state!:string;
  stepper!:Stepper;
  name!:any;
  emailid!:string;
  fathername!:string;
  mothername!:string;
  gender!:string;
  dob!:Date;
  mobilenumber!:number;
  course!:any;
  bfullname!:string;
  bankname!:string;
  bankaccno!:number;
  ifscno!:string;
  namepattern="^[a-zA-z ]{6,32}$";
  constructor(private formBuilder:FormBuilder,private snackbar:MatSnackBar,private ser:ServiceService){
  }
  firstFormGroup=this.formBuilder.group(
   {
     name:['',[Validators.required,Validators.pattern(this.namepattern),Validators.minLength(6),Validators.maxLength(32)]],
     emailid:['',[Validators.required,Validators.pattern(this.namepattern),Validators.minLength(6),Validators.maxLength(32)]],
     fathername:['',[Validators.required,Validators.pattern(this.namepattern),Validators.minLength(6),Validators.maxLength(32)]],
     mothername:['',Validators.required],
     gender:['',Validators.required],
     dob:['',Validators.required],
     mobilenumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],Validators.minLength(10),Validators.maxLength(10)],
     bfullname:['',Validators.required],
     bankname:['',Validators.required],
     bankaccno:['',Validators.required],
     ifscno:['',Validators.required],
     ibank:['',Validators.required],
     mbank:['',Validators.required],
     prasentaddress:['',Validators.required],
     permnentaddress:['',Validators.required]

    }
    )
  secondFormGroup=this.formBuilder.group(
   {
    course:['',Validators.required]
 }
   )

   done() {
    this.completed = true;
    this.state = 'done';
    console.log("Enter stepper ")
    console.log(this.firstFormGroup.value.name);
    console.log(this.secondFormGroup.value.course);
    //  username =this.firstFormGroup.value.name;
    

    //  this.stepper= new Stepper(this.name,this.course);
    console.log(this.stepper)
    this.ser.saveStepperDetails(this.firstFormGroup.value).subscribe();
    window.location.reload();

  }
}
