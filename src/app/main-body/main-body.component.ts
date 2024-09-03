// main-body.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {
  showTask: boolean = false;
  showPomodoro: boolean = false;
  showResources: boolean = false;

  toggleTask() {
    this.showTask = !this.showTask;
  }

  togglePomodoro() {
    this.showPomodoro = !this.showPomodoro;
  }

  toggleResources() {
    this.showResources = !this.showResources;
  }
}
