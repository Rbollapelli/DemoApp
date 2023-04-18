import { Data } from "@angular/router";

export class CourseList
{

    
    version!:string;
    subjectname!:string;
    id!:number;
    constructor(subjectname:string,version:string, id:number){
            this.subjectname=subjectname;
            this.version;
            this.id=id;
    }
    

}