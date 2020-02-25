import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  name;
  constructor(public router: Router) { }
  canActivate(): boolean {
    this.name = localStorage.getItem('name');
    if (this.name == "") {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
