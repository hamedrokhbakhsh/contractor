import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AppService} from '../services/app.service';

@Injectable({
  providedIn: 'root'
})
export class IpAuthGuard implements CanActivate {
  constructor(private router: Router , private service: AppService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.isLogin()){
      this.router.navigate(['/home']);
    }
    return true;
  }

}
