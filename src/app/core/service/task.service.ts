import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl:string ="https://oxydasic-allison-monometrical.ngrok-free.dev/task";
  http = inject(HttpClient)

  addTask(task:Task){
     return this.http.post(`${this.baseUrl}/add`, task);
  }

  updateTask(taskId:number, state:boolean){
    const params = {
      task_id:taskId,
      state: state
    }
    return this.http.put(`${this.baseUrl}/update`, params)
  }
}
