import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Hello } from '../models/hello'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  apiURL = environment.api_url + '/hello'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor( private http: HttpClient,
    private messageService: MessageService) { }

    getHello(): Observable<Hello> {
      return this.http.get<Hello>(this.apiURL);
    }
}
