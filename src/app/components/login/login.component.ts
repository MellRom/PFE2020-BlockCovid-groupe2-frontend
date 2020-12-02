import { Component, OnInit } from '@angular/core';
import { IWebUser } from 'src/app/models/webUser';
import { LoginService } from 'src/app/services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IWebUser;
  login: string;
  password: string; 
  
  constructor() { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
