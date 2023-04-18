import { Form1 } from './../model/Form1';
import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-frommet',
  templateUrl: './frommet.component.html',
  styleUrls: ['./frommet.component.scss']
})
export class FrommetComponent {
form1!:Form1
formGroup!:FormGroup;
namepattern="^[a-zA-z ]{6,32}$";
password="^[a-zA-z ]{6,12}$";
skill: string[] = ['Angular Basic','Angular Intermediate','Angular Advanced'];
constructor(private formBuilder:FormBuilder,private ser:ServiceService){

}
ngOnInit():void{
this.formGroup=this.formBuilder.group({
  fullname:['',[Validators.required,Validators.pattern(this.namepattern),Validators.minLength(5), Validators.maxLength(20)]],
  password:['',[Validators.required]],
  mobilenumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  email:['',[Validators.required,Validators.email]],
  dob:['',[Validators.required]],
  gender:['',[Validators.required]],
  skills:['',[Validators.required]]
})
}
regSubmit(){
  console.log(this.formGroup.value);
 this.ser.Save(this.formGroup.value).subscribe();
 window.location.reload();
}
}
