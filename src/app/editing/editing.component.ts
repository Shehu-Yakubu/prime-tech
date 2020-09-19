import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { EmployeesDataModel } from '../api/employee.model';
import { EmployeesDataService } from '../api/employees.service';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.scss']
})
export class EditingComponent implements OnInit {
  employeesData: EmployeesDataModel[];
  title = 'Editing';
  constructor(private renderer: Renderer2, private employeesDataService: EmployeesDataService) { }

  ngOnInit(): void {
    this.employeesDataService.getEmployeesData()
      .subscribe(employeesData => this.employeesData = employeesData);
  }
}
