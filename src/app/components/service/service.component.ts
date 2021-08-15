import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  title : String = 'Services';
  services :{name : String, icon: String, description : String }[] = [
    {
      name : 'Programmation',
      icon : 'Icon',
      description : 'just wait a sec'
    },
    {
      name : 'Programmation',
      icon : 'Icon',
      description : 'just wait a sec'
    },
    {
      name : 'Programmation',
      icon : 'Icon',
      description : 'just wait a sec'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
