import { Component } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent {
  badges = [
    {
      name: 'Beginner',
      description: 'Complete your first study session.',
      image: 'assets/beginner-badge.png'  // Replace with the path to your image
    },
    {
      name: 'Consistent Learner',
      description: 'Complete 7 consecutive days of study sessions.',
      image: 'assets/learner-badge.png'  // Replace with the path to your image
    },
    {
      name: 'Pomodoro Master',
      description: 'Complete 50 Pomodoro sessions.',
      image: 'assets/master-badge.png'  // Replace with the path to your image
    },
    // Add more badges as needed
  ];
}
