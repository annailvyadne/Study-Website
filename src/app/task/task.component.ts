import { Component } from '@angular/core';

interface Task {
  name: string;
  priority: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  taskName: string = '';
  taskPriority: string = '';
  taskDueDate: string = '';
  tasks: Task[] = [];

  addTask() {
    if (this.taskName && this.taskPriority && this.taskDueDate) {
      this.tasks.push({
        name: this.taskName,
        priority: this.taskPriority,
        dueDate: this.taskDueDate
      });
      // Reset input fields
      this.taskName = '';
      this.taskPriority = '';
      this.taskDueDate = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
