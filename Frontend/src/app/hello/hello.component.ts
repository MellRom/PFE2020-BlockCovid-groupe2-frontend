import { Component, OnInit } from '@angular/core';



import {HelloService} from '../hello.service'
import {Hello} from '../hello';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  hello: Hello[];

  constructor(private helloService : HelloService) { }

  ngOnInit() {
    return this.helloService.getIdHello().subscribe( (data :Hello[]) =>{
      console.log(data);
      this.hello= data;
    } );
  }

}
