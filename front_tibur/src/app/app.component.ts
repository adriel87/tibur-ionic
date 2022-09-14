import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  lista : string[] = [
    "hola",
    "caracola",
    "que haces",
    "por la noche"
  ]

  objectList : any = [
    {
      marca: "bh",
      modelo: "bh3"
    },
    {
      marca: "orbea",
      modelo: "velocity"
    },
  ]

  constructor() {}
}
