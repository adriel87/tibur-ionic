import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  saludo: string

  constructor(
    private route : Router,
    private dbCosas : CosaService
  ) { 
    this.saludo = 'hola maricarme'
  }

  ngOnInit() {
    this.getCosas()
  }

  ionViewDidEnter() {
    this.dbCosas.getCosas().subscribe(response =>{
      this.cosas = response;
    })
  }
  getCosas(){
    this.dbCosas.getCosas().subscribe(response =>{
      this.cosas = response;
    })
  }


  deleteCosa(id){
    this.dbCosas.deleteCosa(id).subscribe(response =>{
      this.cosas = response;
    })
  }

  goBack(){
    this.route.navigate(['/'])
  }

}
