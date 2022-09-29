import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CosaService } from '../services/cosa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cosa : any 
  
  constructor(private router: Router, private dbCosas:CosaService) {}

  ngOnInit(){
    this.getMyFavCosas()
  };

  getMyFavCosas(){
    this.dbCosas.getCosa(7).subscribe(response => {
      this.cosa = response 
      console.log(response, this.cosa);
      
    })
  }



  gotoMyCosas(){
    this.router.navigateByUrl('/my-cosas');
  };

}
