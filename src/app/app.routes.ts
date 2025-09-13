import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { TodoListComponent } from './features/TodoList/TodoList.component';

export const routes: Routes = [
    {
        path:'',
        component: LoginPageComponent
    },{
        path:"todolist",
        component: TodoListComponent
    }
];
