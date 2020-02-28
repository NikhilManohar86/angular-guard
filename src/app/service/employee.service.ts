import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  employeelist(){
    return this.http
    .get<any>(`http://dummy.restapiexample.com/api/v1/employees`)
    .pipe(
      map(res => {   
        return res;
      })
    );
  }
}
