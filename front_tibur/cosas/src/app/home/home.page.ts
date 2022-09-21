import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cosa } from 'src/interfaces';
import { CosaService } from '../services/cosa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  favCosas : Cosa [] = []
  
  constructor(private router: Router, private dbCosas:CosaService) {}

  ngOnInit(){
    this.getMyFavCosas()
  };

  getMyFavCosas(){
    this.dbCosas.getCosasFav().subscribe(response => {
      this.favCosas = response as Cosa[]
    })
  }



  gotoMyCosas(){
    this.router.navigateByUrl('/my-cosas');
  };

}
