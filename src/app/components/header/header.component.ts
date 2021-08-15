import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 items : {name : String, linkTo : String}[] = [
   {name : 'Accueil', linkTo : '/'}, 
   {name :'Qui suis-je ?',linkTo : '#about'}, 
   {name : 'Compétences', linkTo : '#skills'}, 
   {name : 'Services', linkTo : '#service'}, 
   {name : 'Projets', linkTo : '#service'}, 
   {name : 'Contact', linkTo : '#contact'},
 ];
 selectedItemIndex : number = 0;
 isHeaderOnScroll : boolean = false;
 constructor() {
  
  }
   ngOnInit(): void {
     window.onscroll = () => {
        let scrollPoint = document.body.scrollTop || 
        document.documentElement.scrollTop;        
        this.isHeaderOnScroll = scrollPoint > 170 ? true : false;
      }
  }
  onSelect(index : number){
    this.selectedItemIndex = index;
  } 

}
