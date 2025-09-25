import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getUserFromToken():number | null {
    const token = localStorage.getItem('access_token')
    if (!token)
      return null;

    try {
      const decode:any = jwtDecode(token)
      return decode.user_id
    } catch (error) {
      console.log("Token invalide");
      return null;
    }
  }
}
