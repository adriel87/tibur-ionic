import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CosaService } from '../services/cosa.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  updateUserFg: FormGroup;
  id: any;
  fav: any;

  constructor(
    private route : Router,
    private activateRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private cosaService : CosaService

  ) { 
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.fav = {fav: false}
  }

  ngOnInit() {

    this.fetchCosa(this.id)
    this.updateUserFg = this.formBuilder.group({
      tipo: [''],
      calidad: [''],
    })

  }
  
  fetchCosa(id){
    this.cosaService.getCosa(id).subscribe(data => {
      console.log(data);
      
      this.updateUserFg.setValue({
        tipo: data[0]['tipo'],
        calidad: data[0]['calidad'],
      })
    })
  }

  onSubmit(){
    if (!this.updateUserFg.valid) {
      return false;
    } else {
      const myFavState = this.fav;
      this.cosaService.updateCosa(this.id, {...this.updateUserFg.value, ...myFavState})

      .subscribe(() => {
        this.updateUserFg.reset();
        this.route.navigate(['/my-cosas']);
      })
    }
  }
  supe(){
    console.log(this.fav.fav);
    this.fav.fav = !this.fav.fav
    console.log(this.fav.fav);
  }

}
