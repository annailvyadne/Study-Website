import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBodyComponent } from './main-body/main-body.component';
import { TaskComponent } from './task/task.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { ResourcesComponent } from './resources/resources.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BadgesComponent } from './badges/badges.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: MainBodyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'task', component: TaskComponent },
  { path: 'pomodoro', component: PomodoroComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
