import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skills :{name : String, image : String}[] = [
    {name : 'Basics', image :'../../../assets/images/techno/front.jpg'},
    {name : 'React', image :'../../../assets/images/techno/react.png'},
    {name : 'Angular', image :'../../../assets/images/techno/angular2.jpg'},
    {name : 'Flutter', image :'../../../assets/images/techno/flutter.png'},
    {name : 'NodeJs', image :'../../../assets/images/techno/nodejs.png'},
    {name : 'NoSql, Sql', image :'../../../assets/images/techno/database.png'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
