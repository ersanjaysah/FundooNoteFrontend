import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }
  gettoken(){  
    return !!localStorage.getItem("token");  
    }  
}
