import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl:string ="http://localhost:8000/task";
  http = inject(HttpClient)

  addTask(task:Task){
     return this.http.post(`${this.baseUrl}/add`, task);
  }
}
