import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { TitleComponent } from './components/shared/title/title.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { CardComponent } from './components/shared/card/card.component';
import { AComponent } from './exercices/a/a.component';
import { BComponent } from './exercices/b/b.component';
import { CComponent } from './exercices/c/c.component';
import { ItemComponent } from './components/shared/item/item.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    TitleComponent,
    ButtonComponent,
    CardComponent,
    AComponent,
    BComponent,
    CComponent,
    ItemComponent,
    AboutComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
