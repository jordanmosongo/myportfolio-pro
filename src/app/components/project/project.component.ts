import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    stagePadding : 5,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      768: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  title : String = 'Projets réalisés';
  projects = [
    {
      name : "Kinshasa digitale",
      image :"assets/images/realisations/kda.png",
      description : "Reproduction du site de la Kinshasa Digital",
      technos : [
        "assets/images/techno/react.png",
         "assets/images/techno/nodejs.png",
         "assets/images/techno/flutter.png",
      ],
      link : 'https://jordanmosongo.github.io/reproduction/'
    },
    {
      name : "ECMD-O",
      image :"assets/images/realisations/ecmd-o.png",
      description : "Site développé pour l'entreprise de construction ECMD-O",
      technos : [
        "assets/images/techno/react.png",
         "assets/images/techno/nodejs.png",
         "assets/images/techno/angular2.jpg",
      ],
      link : 'lien vers le site'
    },
    {
      name : "Lukafilms",
      image :"assets/images/realisations/lukafilm-image.png",
      description : "Clone d'allociné pour une recherche optimale des films, séries et acteurs",
      technos : [
        "assets/images/techno/react.png",
         "assets/images/techno/nodejs.png",
      ],
      link : 'https://lukafilms.netlify.app/'
    },
  ];

  constructor() { }
  ngOnInit(): void {
    
  }

}
