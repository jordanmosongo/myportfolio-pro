import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-softskill',
  templateUrl: './softskill.component.html',
  styleUrls: ['./softskill.component.scss']
})
export class SoftskillComponent implements OnInit {
  @Input() skills : String[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
