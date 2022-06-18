import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../components/service/Authservice/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private Authorization:AuthorizationService, private router:Router){}
  canActivate(): boolean {  
    if (!this.Authorization.gettoken()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.Authorization.gettoken(); 
  
}}
