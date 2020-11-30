import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor( private http: HttpClient,
    private messageService: MessageService) { }
}
