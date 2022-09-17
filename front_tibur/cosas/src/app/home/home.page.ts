import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tipo = 'asdfsadf';
  calidad = 'ultra';

  constructor(private router: Router) {}

  gotoMyCosas(){
    this.router.navigateByUrl('/my-cosas');
  }

}
