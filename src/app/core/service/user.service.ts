import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string = "https://oxydasic-allison-monometrical.ngrok-free.dev/user";
  http = inject(HttpClient)


  connect(email:string, password:string){
    const body  = {email, password}
    return this.http.post<User>(`${this.baseUrl}/connect`, body )
  }
}
