import {Injectable} from "@angular/core";
@Injectable({
    providedIn:"root"
})
export class dbservice{
    public mysqldb():string{
        return "mysql data soon....";
    }
    public mongodb():string{
        return "mongo data soon.......";
    }
}