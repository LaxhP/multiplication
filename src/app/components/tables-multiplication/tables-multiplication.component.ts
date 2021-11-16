import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-multiplication',
  templateUrl: './tables-multiplication.component.html',
  styleUrls: ['./tables-multiplication.component.css']
})
export class TablesMultiplicationComponent implements OnInit {

  constructor() { }
  @Input() nbTable!: number;


  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }
}
