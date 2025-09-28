import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../../../../core/service/todolist.service';
import { TodoList } from '../../../../core/model/TodoList';
import { AuthService } from '../../../../core/service/auth.service';
import { TodoListUpdateComponent } from '../todo-list-update/todo-list-update.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-list-view',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-view.component.html',
  styleUrl: './todo-list-view.component.css'
})
export class TodoListViewComponent implements OnInit{
  userTodoList:TodoList[]=[]  
  userId:number = -1;
  constructor(private todoListService: TodolistService, private authService: AuthService, private dialog: MatDialog){
    
    this.userId = this.authService.getUserFromToken() || -1;
  }

  ngOnInit(): void {
      
      this.todoListService.getUserTodos(this.userId).subscribe((todos: TodoList[])=>{
          this.userTodoList = todos;
          console.log(this.userTodoList)
      });
  }

 openTodoModal(todolistId:number) {
    this.dialog.open(TodoListUpdateComponent, {
      width: '800px',     
      disableClose: false,
      data: { todolistId }
    });
  }
}
