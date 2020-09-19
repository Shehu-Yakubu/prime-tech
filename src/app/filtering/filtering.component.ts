import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { EmployeesDataModel } from '../api/employee.model';
import { EmployeesDataService } from '../api/employees.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {
  employeesData: EmployeesDataModel[];
  title = 'Filtering';
  constructor(private renderer: Renderer2, private employeesDataService: EmployeesDataService) { }

  ngOnInit(): void {
    this.employeesDataService.getEmployeesData()
      .subscribe(employeesData => this.employeesData = employeesData);
  }
}
