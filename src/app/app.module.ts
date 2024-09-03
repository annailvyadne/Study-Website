import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TaskComponent } from './task/task.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { ResourcesComponent } from './resources/resources.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BadgesComponent } from './badges/badges.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    HeaderComponent,
    FooterComponent,
    TaskComponent,
    PomodoroComponent,
    ResourcesComponent,
    AboutComponent,
    ContactComponent,
    BadgesComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
