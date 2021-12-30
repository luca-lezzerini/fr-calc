import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  risultato: number = 0;
  add1: number = 0;
  add2: number = 0;
  cosa: string = "";
  lista: string[] = [];

  calcola() {
    this.risultato = this.add1 + this.add2;
  }

  aggiungiAllaLista() {
    // aggiunge in fondo all'array un nuovo elemento
    this.lista.push(this.cosa);
    console.log(this.lista);
  }

  cancella(inx: number) {
    this.lista.splice(inx, 1);
  }
}
