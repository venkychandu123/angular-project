import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardactivateGuard implements CanActivate {
  constructor(public root:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     {
       if(localStorage.getItem("em")=== null){
         this.root.navigate([""]);
         return false;
       }else{
        return true;
       }

  }
  
}
