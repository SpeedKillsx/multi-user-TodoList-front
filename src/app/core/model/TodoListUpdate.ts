import { Task } from "./Task";

export interface TodoListUpdate{
    todolist_name:string,
    tasks: Task[]
}