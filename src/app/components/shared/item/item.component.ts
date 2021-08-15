import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item : {name : String, linkTo : String} | undefined;
  
  constructor() { }

  ngOnInit(): void {
      
  }

}
