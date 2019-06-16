import { SharedService } from './../../services/shared.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate{

    public shared: SharedService;

    constructor( private router: Router){
        this.shared = SharedService.getInstance();
    }

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.shared.isLoggedIn()){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
   
    

    


}