import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent {
  minutes: number = 25; // Default Pomodoro time (25 minutes)
  seconds: number = 0;
  customMinutes: number = 25; // For user input
  customSeconds: number = 0; // For user input
  isRunning: boolean = false;
  timer: any;
  message: string = '';

  setTimer() {
    this.minutes = this.customMinutes;
    this.seconds = this.customSeconds;
    this.message = 'Timer set to ' + this.minutes + ' minutes and ' + this.seconds + ' seconds.';
  }

  startTimer() {
    if (this.isRunning) return;

    this.isRunning = true;
    this.message = 'Focus and start working!';

    this.timer = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(this.timer);
          this.isRunning = false;
          this.message = 'Time is up! Take a break.';
          return;
        }
        this.minutes--;
        this.seconds = 59;
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.isRunning = false;
    this.message = 'Timer stopped.';
  }

  resetTimer() {
    clearInterval(this.timer);
    this.isRunning = false;
    this.minutes = this.customMinutes; // Reset to user-defined time
    this.seconds = this.customSeconds;
    this.message = 'Timer reset.';
  }
}
