import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cosas-item',
  templateUrl: './my-cosas-item.component.html',
  styleUrls: ['./my-cosas-item.component.scss'],
})
export class MyCosasItemComponent implements OnInit {

  @Input() cosa: any;

  constructor(
    private route : Router
  ) { }

  ngOnInit() {
       
  }

  onUpdate(){
    console.log('update', this.cosa.id);
    this.route.navigate(['/update/'+this.cosa.id])
  }
  onDelete(){
    this.route.navigate(['/delete/'+this.cosa.id])
    console.log('delete');
  }

}
