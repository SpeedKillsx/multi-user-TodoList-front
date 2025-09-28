import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TodoListUpdate } from '../model/TodoListUpdate';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  baseUrl:string = "http://localhost:8000/todo";
  http = inject(HttpClient)

  getUserTodos(user_id:number){
    return this.http.get<any>(`${this.baseUrl}/user/${user_id}`)
  }

  getTodoListInformation(todolistId:number){
    return this.http.get<TodoListUpdate>(`${this.baseUrl}/${todolistId}`)
  }
  
}
