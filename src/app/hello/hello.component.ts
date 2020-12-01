import { Component, OnInit } from '@angular/core';

import {HelloService} from '../hello.service'
import {Hello} from '../hello';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  public hello = new Hello(); 

  constructor(private helloService : HelloService) { }

  ngOnInit(): void {
    this.getHello()
  }

  getHello(): void{
    this.helloService.getHello()
    .subscribe((data) => {
      this.hello = data;
    })
  }



}
