import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './../models/user.model';


@Injectable()
export class AuthenticationService {

    private _loginUrl: string = "http://localhost:5000/app/login"
    private _userDataUrl: string = "http://localhost:5000/app/get/user/data"
    private _registerUserUrl: string = "http://localhost:5000/app/register/user"
    private _logOutUrl: string = "http://localhost:5000/app/user/logout"
    
    constructor(private _http: Http) {

    }

    checkForUserSession(){
        return this._http.get(this._loginUrl,{withCredentials : true})
            .map((response : Response) => response.json());
    }

    logIn(user) {
        console.log(user)
        return this._http.post(this._loginUrl,{email : user.email,password :user.password},{withCredentials : true}).map((response : Response)=>{
            console.log(response);
            return response.json();
        })
    }

    registerUser(user : any){
        console.log(user)
        return this._http.post(this._registerUserUrl,{user:user}).map((response : Response) => {
            console.log(response);
            return response.json();
        });
    }

    getUserData(){
        return this._http.get(this._userDataUrl,{withCredentials : true}).map((response : Response) => {
            return response.json();
        });
    }

    logOut(){
        return this._http.get(this._logOutUrl,{withCredentials : true}).map((response : Response) => {
            return response.json();
        });
    }

}