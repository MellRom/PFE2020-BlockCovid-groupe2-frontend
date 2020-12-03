import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MessageService } from '../message/message.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  login(username, password) {
    return this.http.post<any>(environment.api_url + '/connexion', {"login": username, "password": password })
  }
  inscription(login, name, role, password, adress) {
    console.log(login);
    return this.http.post<any>(environment.api_url + '/inscription', {"login": login, "password": password, "role": role, "name": name, "adress": adress })
  }
  listPlace(id_establishment){
    return this.http.post<any>(environment.api_url + '/establishment/liste_lieux',{"id_establishment": id_establishment})
  }
}