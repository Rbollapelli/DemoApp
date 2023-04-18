import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 public openState=false;
   constructor(private formBuilder:FormBuilder,private snackbar:MatSnackBar){

   }
   firstFormGroup=this.formBuilder.group(

        {
    
          fctrl:['',Validators.required]
    
        }
    
      )
    
      secondFormGroup=this.formBuilder.group(
    
        {
    
          sctrl:['',Validators.required]
    
        }
    
    )
    openSnackBar(message:string,action:string)
    {
   
     this.snackbar.open(message,action,{duration:100});
   
    }
}
