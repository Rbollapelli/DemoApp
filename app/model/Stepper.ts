import { Data } from "@angular/router";

export class Stepper
{
    id!:number;
    name!:string;
    emailid!:string;
    fathername!:string;
    mothername!:string;
    gender!:string;
    dob!:Date;
    mobilenumber!:number;
    bfullname!:string;
   bankname!:string;
   bankaccno!:number;
   ifscno!:string;
   ibank!:string;
   mbank!:string;
   prasentaddress!:string;
   permnentaddress!:string;
    constructor(id:number,name:string,emailid:string,fathername:string,mothername:string,gender:string,dob:Date
        ,mobilenumber:number,bfullname:string,bankname:string,bankaccno:number,ifscno:string,
        ibank:string,mbank:string,prasentaddress:string,permnentaddress:string){
            this.id=id;
            this,name=name;
            this.emailid=emailid;
            this.fathername=fathername;
            this.mothername=mothername;
            this.gender=gender;
            this.dob=dob;
            this.mobilenumber=mobilenumber;
            this.bfullname=bfullname;
            this.bankname=bankname;
            this.bankaccno=bankaccno;
            this.ifscno=ifscno;
            this.ibank=ibank;
            this.mbank=mbank;
           
            this.prasentaddress=prasentaddress;
            this.permnentaddress=permnentaddress;
        }

}