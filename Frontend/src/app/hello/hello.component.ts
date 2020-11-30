import { Component, OnInit } from '@angular/core';
import {Hello} from '../hello';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  hello: Hello = {
    content: 'Hello World'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
