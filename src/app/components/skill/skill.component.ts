import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skills :{name : String, percentage : String}[] = [
    {name : 'Html5, Css3', percentage :'90%'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
