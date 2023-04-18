import { Form1 } from './../model/Form1';
import { ServiceService } from './../service/service.service';
import { Validators, FormBuilder, FormGroup, Form } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form1!:Form1;
  public finalform1!:Form1;
  formGroup!:FormGroup;
  formDetails!:Form1[];
 public  loginFail:string="false";
  public loginsuc:string="false";
  public formenable:string='true'
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
  this.ser.GetData().subscribe((data)=>{
    this.formDetails=data;
    });
  }
  regSubmit(){
    console.log(this.formGroup.value);
   this.ser.Save(this.formGroup.value).subscribe();
   window.location.reload();
  }

  login(){
    let username:string;
    console.log(this.formGroup.value);
    console.log("login details ==>"+this.formDetails);
    this.formDetails.forEach((d=>{
      console.log("login details ==>"+d.fullname);
      username=this.formGroup.value.fullname;
      if(d.fullname.toString==username.toString){ 
        this.finalform1=d;
        console.log(d);
        this.loginsuc='true';
        this.formenable='false';
         console.log("login details"+d.fullname);
    }
   }));
   
  }
}
