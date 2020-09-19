import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { EmployeesDataModel } from '../api/employee.model';
import { EmployeesDataService } from '../api/employees.service';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  employeesData: EmployeesDataModel[];
  title = 'Paging';
  constructor(private renderer: Renderer2, private employeesDataService: EmployeesDataService) { }

  ngOnInit(): void {
    this.employeesDataService.getEmployeesData()
      .subscribe(employeesData => this.employeesData = employeesData);
  }
}
