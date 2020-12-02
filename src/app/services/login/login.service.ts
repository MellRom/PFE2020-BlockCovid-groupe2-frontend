import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MessageService } from '../message/message.service';
import { IWebUser } from 'src/app/models/webUser'


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  login(username, password) {
    return this.http.post<any>(environment.api_url + '/connexion', { username, password })
  }
}