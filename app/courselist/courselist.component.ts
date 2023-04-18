import { CourseList } from './../model/CourseList';
import { ServiceService } from './../service/service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.scss']
})
export class CourselistComponent {

  courselist!:CourseList[];
  constructor(private ser:ServiceService){
    
  }
  ngOnInit():void{
    this.ser.GetCourseList().subscribe((data)=>{
      this.courselist=data;
    });
  }
  
}
