import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-multiplication',
  templateUrl: './table-multiplication.component.html',
  styleUrls: ['./table-multiplication.component.css']
})
export class TableMultiplicationComponent implements OnInit {

  constructor() { }
  @Input() chiffre!: number;
  resultat: number[] = [];
   

  ngOnInit(): void {
  }

  multiplication(): number[] {

    var table: number[] = [];
    if (this.chiffre) {
      for (let i = 1; i <= 10; i++) {
        let x = this.chiffre * i;
        table.push(x);
      }
      return table;
    }
    return table;
  }

}
