import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BaseUrl=environment.baseUrl;

  constructor(private httpService:HttpService) { }

  Registration(reqdata:any){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json'
      })
      
    }
    return this.httpService.postService(this.BaseUrl+'User/Register',reqdata,false,header)
  }

  login(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService(this.BaseUrl+`User/login/${reqdata.email}/${reqdata.password}`,{},false,header)
  }
  forgot(reqData:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService(this.BaseUrl+`User/ForgotPassword/${reqData.email}`,reqData,true,header)
  }
  resetPassword(reqdata:any, token:any){
    console.log(reqdata)

    let header={
      Headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' +token
      })

    }
    return this.httpService.putService(this.BaseUrl+`User/ChangePassword`,reqdata, true, header)

}
}