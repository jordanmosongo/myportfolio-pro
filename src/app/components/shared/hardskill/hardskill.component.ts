import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardskill',
  templateUrl: './hardskill.component.html',
  styleUrls: ['./hardskill.component.scss']
})
export class HardskillComponent implements OnInit {
  @Input() skills : {name : String, image : String}[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
