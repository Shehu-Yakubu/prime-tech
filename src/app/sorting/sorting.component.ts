import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { EmployeesDataModel } from '../api/employee.model';
import { EmployeesDataService } from '../api/employees.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  employeesData: EmployeesDataModel[];
  title = 'Sorting';
  constructor(private renderer: Renderer2, private employeesDataService: EmployeesDataService) { }

  ngOnInit(): void {
    this.employeesDataService.getEmployeesData()
      .subscribe(employeesData => this.employeesData = employeesData);
  }
}
