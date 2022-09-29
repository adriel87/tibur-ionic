import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CosaService } from '../services/cosa.service';

@Component({
  selector: 'app-create-your-cosa',
  templateUrl: './create-your-cosa.page.html',
  styleUrls: ['./create-your-cosa.page.scss'],
})
export class CreateYourCosaPage implements OnInit {


  userForm : FormGroup

  constructor(
    private router : Router,
    public formBuilder : FormBuilder,
    private zone : NgZone,
    private cosaService : CosaService
  ) {

    this.userForm = this.formBuilder.group({
      calidad : [''],
      tipo : [''],
    })

   }

  ngOnInit() {
  }

  onSubmit(){
    if (!this.userForm.valid) {
      return false
    } else {
      this.cosaService.createNewCosa(this.userForm.value)
        .subscribe(response => {
          this.zone.run(()=>{
            this.userForm.reset();
            this.router.navigate(['/my-cosas'])
          })
        })
      
    }
  }

}
