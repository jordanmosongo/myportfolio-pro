import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hardskill',
  templateUrl: './hardskill.component.html',
  styleUrls: ['./hardskill.component.scss']
})
export class HardskillComponent implements OnInit {
  @Input() skills :{name : String, percentage : String}[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
