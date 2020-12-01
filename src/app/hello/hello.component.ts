import { Component, OnInit } from '@angular/core';
import {HelloService} from '../hello.service'
import {Hello} from '../hello';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  hello: Hello; 
  qrdata: string = null;
  id_hello: number = null;

  constructor(private helloService : HelloService) {
    this.qrdata = 'Error';
  }

  ngOnInit() {
    this.getHello()
  }

  getHello(): void{
    this.helloService.getHello()
    .subscribe(hello => {
      this.hello = hello
      this.genereateQrCode();
    });
  }

  genereateQrCode(): void{
    this.id_hello = this.hello.id
    this.qrdata = this.id_hello.toString();
  }
}
