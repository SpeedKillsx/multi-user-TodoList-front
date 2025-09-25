import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListViewComponent } from "../components/todo-list-view/todo-list-view.component";
@Component({
  selector: 'app-todolist',
  templateUrl: './TodoList.component.html',
  styleUrls: ['./TodoList.component.css'],
  standalone: true,
  imports: [FormsModule, TodoListViewComponent]
})
export class TodoListComponent implements OnInit {
  viewClicked:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  

  btnView(){
    this.viewClicked = true;
  }
}
