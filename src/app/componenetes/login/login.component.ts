import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public apikey: string = ""
  public link: string = ""

  login() {
    
    const url = environment.apiFootbal.url;
    const token = environment.apiFootbal.token;
    location.href = "/dash";
    console.log(`URL: ${url}`);
    console.log(`Token: ${token}`);
    
  }
  
}


