import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-cosa',
  templateUrl: './create-new-cosa.component.html',
  styleUrls: ['./create-new-cosa.component.scss'],
})
export class CreateNewCosaComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {}

  goToCreatePage(){
    this.router.navigate(['/create-your-cosa'])
  }

}
