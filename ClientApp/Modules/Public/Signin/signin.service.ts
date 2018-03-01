import { Injectable } from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import { Observable } from 'rxjs/Rx';


@Injectable()
export class SigninService {

    constructor(private http : Http){}



    public sendLoginReq (usrData:any):Observable<any>{

        let authData = new URLSearchParams();
        authData.append('email',usrData.email);
        authData.append('password',usrData.password);
        let result = this.http
            .post('/api/values',authData, {headers: this.getHeaders()})
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