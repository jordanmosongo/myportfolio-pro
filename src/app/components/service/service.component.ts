import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  title : String = 'Mes Services';
  services :{name : String, icon: String, description : String }[] = [
    {
      name : 'Analyse et conception',
      icon : 'Icon',
      description : 'Développement des applications de qualité répondant à vos exigences'
    },
    {
      name : 'programmation web mobile',
      icon : `<i class="fas fa-code"></i>`,
      description : 'Développement des applications sur mesure et des projets à impact social'
    },
    {
      name : 'UX et UI',
      icon : 'Icon',
      description : 'Développement des applications de qualité répondant à vos exigences'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
