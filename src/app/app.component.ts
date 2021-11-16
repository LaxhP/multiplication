import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multiplication';


  chiffre:number = 0;
  nbtables:number = 10

  onChiffreAdded(event : number) {
  this.chiffre = event;
  }

  nbTableAdded(event : number){
    this.nbtables = event;
  }

  getChiffre() {
    return this.chiffre != 0;
  }
}
