import { Injectable } from "@angular/core";
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItemService{

    constructor(private http:Http){}

    public getItems():Observable<any>{

        let result = this.http
            .get('/api/values', 
            {headers: this.getHeaders()})
            .map(this.mapData)
            .catch(this.handleError);
        return result;
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    private mapData(response:Response): any{
        let _results = response.json();

        return _results;
        

    }
    private handleError (error: any) {

        console.log(error)
        // log error
        // could be something more sofisticated
        let errorMsg = error.message || `Yikes! There was was a problem.... we couldn't retrieve your data!`
        console.error(errorMsg);
        // throw an application level error
        return Observable.throw(errorMsg);
    }

    
}