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
 isMobileMenuClicked : boolean = false;
 isMobileMenu : boolean= false;
 isMenuHidden : boolean = true;
 constructor() {
  
  }
   ngOnInit(): void {
     window.onscroll = () => {
        let scrollPoint = document.body.scrollTop || 
        document.documentElement.scrollTop; 
        if(window.innerWidth > 768){
          this.isHeaderOnScroll = scrollPoint > 120 ? true : false;
        } else{
          this.isHeaderOnScroll = scrollPoint > 30 ? true : false;
        }   
        
      }
  }
  onSelect(index : number){
    this.selectedItemIndex = index;
    } 
  onShowOrHideMobileMenu(){
    if(this.isMobileMenu){
      this.isMenuHidden = !this.isMenuHidden;
      setTimeout(()=>{
        this.isMobileMenu = !this.isMobileMenu;        
      }, 500);
    }else{
      this.isMobileMenu = !this.isMobileMenu;
      this.isMenuHidden = !this.isMenuHidden;
    }
  }

}
