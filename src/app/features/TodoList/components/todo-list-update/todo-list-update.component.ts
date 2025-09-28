import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { TodoListUpdate } from '../../../../core/model/TodoListUpdate';
import { TodolistService } from '../../../../core/service/todolist.service';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../../core/service/task.service';
import { Task } from '../../../../core/model/Task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list-update',
  standalone: true,
  templateUrl: './todo-list-update.component.html',
  styleUrls: ['./todo-list-update.component.css'],
  imports: [ CommonModule, FormsModule ]
})
export class TodoListUpdateComponent implements OnInit {

  todolistInformation?: TodoListUpdate;
  newTaskDescription: string = "";

  loading = true;
  error = '';

  constructor(
    private todolistService: TodolistService,
    private dialogRef: MatDialogRef<TodoListUpdateComponent>,
    private taskService:TaskService,
    @Inject(MAT_DIALOG_DATA) public data: { todolistId: number }
  ) {}

  ngOnInit(): void {
    this.getTodoListDetails();
  }

  getTodoListDetails() {
    this.todolistService.getTodoListInformation(this.data.todolistId).subscribe({
      next: (response) => {
        this.todolistInformation = response;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load todo list.';
        console.error(err);
        this.loading = false;
      }
    });
  }


  addTask(description: string){
    const newTask: Task = {
      id: 0,
      description: description,
      is_done: false,
      id_todo_list: this.data.todolistId
    };

    this.taskService.addTask(newTask).subscribe({
      next: (res) => {
        console.log('Task added successfully', res);
        this.getTodoListDetails();
      },
      error: (err) => {
        console.error('Error adding task', err);
      }
    });
  }

  close() {
    this.dialogRef.close();
  }
}
