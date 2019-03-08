import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeURL = 'https://localhost:44374/api';

  constructor(private http: HttpClient) { }

  /**
   * getEmployee
   */
  public getEmployee(id: string) {
    const  headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });

    if (id === '') {
      const URL = `${this.employeeURL}/employees`;
      return this.http.get(URL, {headers})
      .pipe( map(data => data));
    } else {
      const URL = `${this.employeeURL}/employees/${id}`;
      return this.http.get(URL, {headers})
      .pipe( map(data => data));
    }
  }
}
