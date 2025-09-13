import { Component } from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { FormsModule } from '@angular/forms';
import {User} from '../../core/model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private userService: UserService, private router: Router){}
  email:string=""
  password:string=""
  logged:boolean=false;
  login(){
    console.info("email = ", this.email)
    console.info("password = ", this.password)
    this.userService.connect(this.email, this.password).subscribe({
    next: (user:User) => {
      console.log("Utilisateur connecté :", user.email);
      localStorage.setItem("access_token", user.access_token)
      this.logged=true
      this.router.navigate(['/todolist'])
    },
    error: (err) => {
      console.error("Erreur de connexion :", err);
    }
  });

}

}
