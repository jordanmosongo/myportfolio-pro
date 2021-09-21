import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MDBBootstrapModule} from 'angular-bootstrap-md'
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { TitleComponent } from './components/shared/title/title.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { ItemComponent } from './components/shared/item/item.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { HardskillComponent } from './components/shared/hardskill/hardskill.component';
import { SoftskillComponent } from './components/shared/softskill/softskill.component';
import { ServiceComponent } from './components/service/service.component';
import { CardProjectComponent } from './components/shared/card-project/card-project.component';
import { CardServiceComponent } from './components/shared/card-service/card-service.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    TitleComponent,
    ButtonComponent,
     ItemComponent,
    AboutComponent,
    SkillComponent,
    HardskillComponent,
    SoftskillComponent,
    ServiceComponent,
    CardProjectComponent,
    CardServiceComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
      
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
