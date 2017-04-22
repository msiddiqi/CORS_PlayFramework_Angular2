import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class EchoRequestService {
    sendEchoRequest(message: String): Observable<String> {
        var httpObservable : Observable<Response>= this._http.get('http://localhost:9000?message='+message);
        return httpObservable.map(response => response.text());
    }

    constructor(private _http: Http) {
    }
}