import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  title : String = 'Projets réalisés';
  projects = [
    {
      name : "Kinshasa digitale",
      image :"assets/images/realisations/kda.png",
      description : "Un projet mis en place pour la kd",
      technos : [
        'html', 'css', 'javascript'
      ],
      link : 'lien vers le site'
    },
    {
      name : "Lukafilms",
      image :"assets/images/realisations/kda.png",
      description : "Un projet mis en place pour la kd",
      technos : [
        'html', 'css', 'javascript'
      ],
      link : 'lien vers le site'
    },
    {
      name : "ECMD-O",
      image :"assets/images/realisations/ecmd-o.png",
      description : "Un projet mis en place pour la kd",
      technos : [
        'html', 'css', 'javascript'
      ],
      link : 'lien vers le site'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
