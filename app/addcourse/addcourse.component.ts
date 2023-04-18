import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from './../service/service.service';
import { CourseList } from './../model/CourseList';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent {

  course!:CourseList;
  formGroup!:FormGroup;
  courselist!:CourseList[];
  constructor(private ser:ServiceService,private formBuilder:FormBuilder,private router: Router){
    
  }
  ngOnInit():void{
    this.formGroup=this.formBuilder.group({
    subjectname:['',[Validators.required]],
    version:['',[Validators.required]]
    });
    this.ser.GetCourseList().subscribe((data)=>{
      this.courselist=data;

    });
    
  }
  saveCourseDetails(){
    this.ser.saveCourseDetails(this.formGroup.value).subscribe();
    //this.router.navigate(['/courselist']);
    window.location.reload();
    }

    

}
