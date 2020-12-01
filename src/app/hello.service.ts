import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Hello } from './hello'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelloService {

  apiURL = 'http://localhost:8080/hello'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor( private http: HttpClient,
    private messageService: MessageService) { }

    getHello(): Observable<Hello> {
      return this.http.get<Hello>(this.apiURL);
    }
}
