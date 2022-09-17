import { Component, OnInit } from '@angular/core';
import { CosaService } from '../services/cosa.service';

interface Cosa {
  id: number,
  tipo: string,
  calidad: string,
}

const initCosa : Cosa[]= [
  {
    id:1,
    calidad: 'ultra',
    tipo: 'simple'
  },
  {
    id:2,
    calidad: 'normal',
    tipo : 'elaborado'
  }
]

@Component({
  selector: 'app-my-cosas',
  templateUrl: './my-cosas.page.html',
  styleUrls: ['./my-cosas.page.scss'],
})
export class MyCosasPage implements OnInit {

  cosas : any;

  constructor(private dbCosas : CosaService) { }

  ngOnInit() {
    this.getCosas()
  }

  getCosas(){
    this.dbCosas.getCosas().subscribe(response =>{
      this.cosas = response;
    })
  }

}
