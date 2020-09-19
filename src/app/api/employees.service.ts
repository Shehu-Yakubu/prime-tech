import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeesDataModel } from './employee.model';
import { EMPLOYEESDATA } from './employees.data';

@Injectable({
  providedIn: 'root',
})
export class EmployeesDataService {

  constructor() {}

  getEmployeesData(): Observable<EmployeesDataModel[]> {
    return of(EMPLOYEESDATA);
  }
}
