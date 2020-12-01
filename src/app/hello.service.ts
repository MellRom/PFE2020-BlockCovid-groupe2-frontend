import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

import { Hello } from './hello'


@Injectable({
  providedIn: 'root'
})
export class HelloService {

  apiURL = 'http://localhost:8080/hello'

  constructor( private http: HttpClient,
    private messageService: MessageService) { }


    getHello() {
      return this.http.get<Hello>(this.apiURL);
    }
}
