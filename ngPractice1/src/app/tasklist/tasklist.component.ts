import { Component } from '@angular/core';
import { Task } from '../interfaces/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss',
})
export class TasklistComponent {
  tasks: Task[] = [
    {
      title: 'Design Homepage Layout',
      description:
        'Create wireframes and a mockup for the new homepage layout.',
    },
    {
      title: 'Update User Profile Feature',
      description:
        'Enhance the user profile page with new fields and validation.',
    },
    {
      title: 'Fix Bugs in Task Management Module',
      description: 'Resolve the bugs reported in the task management module.',
    },
    {
      title: 'Develop Notification System',
      description: 'Implement a notification system for task updates.',
    },
    {
      title: 'Code Review for Authentication Module',
      description:
        'Conduct a code review for the recently developed authentication module.',
    },
  ];

  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: Task = {
        title: this.taskForm.value.title ?? '',
        description: this.taskForm.value.description ?? '',
      };
      this.tasks = [...this.tasks, newTask];
      this.taskForm.get('title')?.reset();
      this.taskForm.get('description')?.reset();
    } else {
      alert('Please complete the form');
    }
  }
}
