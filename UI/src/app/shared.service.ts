import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl = 'http://localhost:5132/api';

  constructor(private http: HttpClient) { }

  getEmployeeList():Observable<any[]>{
    return this.http.get<any>('http://localhost:5132/api/Task/Employees');
    
  }

  addTask(taskData: any): Observable<string> {
    return this.http.post(this.ApiUrl+'/Task', taskData, { responseType: 'text' });
  }

  gettaskList():Observable<any[]>{
    return this.http.get<any>('http://localhost:5132/api/Task/GetAllTasks');
  }
}
