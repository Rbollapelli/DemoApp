import { Data } from "@angular/router";

export class Form1
{

    fullname!:string;
    emailid!:string;
    password!:string;
    gender!:string;
    dob!:Date;
    mobilenumber!:number;
    skills!:string;
    id!:number;
    constructor(fullname:string,emailid:string,password:string,
        gender:string,dob:Date,mobilenumber:number,skills:string, id:number){
            this.fullname=fullname;
            this.emailid=emailid;
            this.password=password;
            this.gender=gender;
            this.dob=dob;
            this.mobilenumber=mobilenumber;
            this.skills=skills;
            this.id=id;
    }
    

}