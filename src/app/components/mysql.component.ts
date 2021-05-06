import {Component} from "@angular/core";
import {dbservice} from "../services/db.services";
@Component({
    selector:"mysql",
    templateUrl:"./mysql.component.html"
})
export class mysqlcomponent{
    result:string;
    constructor(private obj:dbservice){}
    ngOnInit(){
        this.result=this.obj.mysqldb();
    }
}