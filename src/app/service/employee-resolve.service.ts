import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
  } from '@angular/router';  
import { EmployeeService } from './employee.service'
import { Observable, of, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolveService implements Resolve<any> {

  constructor(private employeeService:EmployeeService) { }
  resolve(): Observable<any> | Promise<any> | any {
    return this.employeeService.employeelist();
  }
}
