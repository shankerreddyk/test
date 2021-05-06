import{Component} from "@angular/core";
import {dbservice} from "../services/db.services";
@Component({
    selector:"mongodb",
    templateUrl:"./mongodb.component.html"
})
export class mongodbcomponent{
    result:string;
    constructor(private obj:dbservice){};
    ngOnInit(){
        this.result=this.obj.mongodb();
    }
}