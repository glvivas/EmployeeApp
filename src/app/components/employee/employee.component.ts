import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  idEmployee: string;
  loading = true;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
  }

  buscar(id: string) {
    console.log(id);

    this._employeeService.getEmployee(id)
      .subscribe((data: any) => {
        if (data instanceof Array) {
          this.employees = data;
        } else {
          this.employees = [data];
        }
        this.loading = false;
      });
  }

}
