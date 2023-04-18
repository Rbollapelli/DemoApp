import { Stepper } from './../model/Stepper';
import { CourseList } from './../model/CourseList';


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Observable } from 'rxjs';

import { BehaviorSubject } from 'rxjs';
import { Form1 } from '../model/Form1';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public username:any='';
  public cartIteamList:any=[];
  public productList=  new BehaviorSubject<any>([]);
  constructor(public http:HttpClient) { 
  }
  Save(form1:Form1){
    console.log(form1);
     return this.http.post<Form1>("http://localhost:3000/RegistrationDetails",form1).pipe(map((res:any)=>{
      return res;
     }));
  }

  GetData():Observable<any>
  {
    return this.http.get<any>("http://localhost:3000/RegistrationDetails");
   }

   getLoginData(form1:any):Observable<any[]>
  {
    console.log("service"+form1.fullname)
    return this.http.get<any[]>("http://localhost:3000/RegistrationDetails?fullname="+form1.fullname);
   }
 //

 GetCourseList():Observable<any>
  {
    return this.http.get<any>("http://localhost:3000/courseDetails");
   }

   saveCourseDetails(form1:any){
    console.log("Form details "+form1);
     return this.http.post<any>("http://localhost:3000/courseDetails",form1).pipe(map((res:any)=>{
      return res;
     }));
  }

  saveStepperDetails(step:any){
    console.log("Form details ");
     return this.http.post<any>("http://localhost:3000/Stepper",step).pipe(map((res:any)=>{
      return res;
     }));
  }

  GetstepperList():Observable<any>
  {
    return this.http.get<any>("http://localhost:3000/Stepper");
   }
}
