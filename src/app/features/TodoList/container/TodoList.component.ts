
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListViewComponent } from "../components/todo-list-view/todo-list-view.component";
import { TodoListAddComponent } from "../components/todo-list-add/todo-list-add.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todolist',
  templateUrl: './TodoList.component.html',
  styleUrls: ['./TodoList.component.css'],
  standalone: true,
  imports: [FormsModule, TodoListViewComponent, TodoListAddComponent, CommonModule]
})
export class TodoListComponent implements OnInit {
  viewClicked:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  

  btnView(value:boolean){
    this.viewClicked = value;
  }
}
