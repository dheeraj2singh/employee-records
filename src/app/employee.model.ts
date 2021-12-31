import { Certification } from './certification.model';
import { Designation } from './designation.model';
export class Employee {
    id!:number;
    name!: string;
    phone!:Number;
    email!: string;
    address!:string;
    salary!:number;
   designation!:Designation;
   certificates!:Certification[];

}
