import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodolistService } from '../../../../core/service/todolist.service';
import { TodoList } from '../../../../core/model/TodoList';
import { AuthService } from '../../../../core/service/auth.service';
@Component({
  selector: 'app-todo-list-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list-add.component.html',
  styleUrl: './todo-list-add.component.css'
})
export class TodoListAddComponent implements OnInit{
  
  constructor(
    private todolistService:TodolistService,
    private authService: AuthService
  ){}

  todolistName:string=""
  ngOnInit(): void {
      
  }

  validateForm() {
  const userId = this.authService.getUserFromToken();
  if (!userId) return;

  if (!this.todolistName.trim()) {
    console.log('TodoList Name is empty!');
    return;
  }

  const newTodoList = {
    id:0,
    id_user: userId,
    todolist_name: this.todolistName,
    creation_date: new Date().toISOString().split('T')[0]
  };

  
  this.todolistService.insertTodoList(newTodoList).subscribe({
    next: (res) => {
      this.todolistName = '';
    },
    error: (err) => {
      console.error('Error occured during todolit insert', err);
      if (err.error?.detail) console.error('ERROR BACKEND :', err.error.detail);
    }
  });
}


}
