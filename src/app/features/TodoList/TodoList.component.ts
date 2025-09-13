import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todolist',
  templateUrl: './TodoList.component.html',
  styleUrls: ['./TodoList.component.css'],
  standalone: true,
  imports:[FormsModule]
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
