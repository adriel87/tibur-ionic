import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CosaService } from '../services/cosa.service'


@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {
  @ViewChild(IonModal) modal : IonModal;
  id : any;
  nose: any;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private cosaService: CosaService
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.loadData()
  }

  loadData(){
    this.cosaService.getCosa(this.id)
    .subscribe(data => {
      console.log(data);
      
      this.nose = data[0]
      console.log(this.nose);
      
    })
  }

  goBack(){
    this.route.navigate(['/my-cosas'])
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.id, 'confirm');
    this.cosaService.deleteCosa(this.id).subscribe(response=>{
      console.log(response);
    })
    this.goBack();

  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log("holi caracoli");
     
    }
  }

}
