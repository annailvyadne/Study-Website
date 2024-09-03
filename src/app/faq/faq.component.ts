import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: 'Will my data be saved?',
      answer: 'No, your data is not saved because there is no account feature. All data is stored locally in your browser.'
    },
    {
      question: 'Is this website mobile-friendly?',
      answer: 'Yes, the website is designed to be responsive and works on both desktop and mobile devices.'
    },
    {
      question: 'Do I need to download anything to use this website?',
      answer: 'No, this is a web-based platform. All features are accessible directly through your browser without any downloads.'
    },
    {
      question: 'How can I provide feedback or suggestions?',
      answer: 'You can provide feedback or suggestions through the Contact Us page. We appreciate your input to help improve our platform.'
    }
  ];

  expandedIndex: number | null = null; // Track the expanded item

  toggleAnswer(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
