import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagnumeros',
  templateUrl: './pagnumeros.component.html',
  styleUrls: ['./pagnumeros.component.css']
})
export class PagnumerosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  list: number[] = [];

  getNumerosTable(){
    this.list.push(Math.random());
    return this.list;
  }
}