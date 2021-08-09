import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 items : String[] = [
   'Accueil', 'Qui suis-je ?', 'Compétences', 'Services', 'Projets', 'Contact'
 ];
 constructor() {
  
  }
   ngOnInit(): void {
  }
  

}
