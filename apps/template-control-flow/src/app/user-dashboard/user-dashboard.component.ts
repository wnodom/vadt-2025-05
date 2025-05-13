import { Component } from '@angular/core';

const meetings = [
  {
    description: 'Standup',
    participants: ['John', 'Paul', 'Ringo', 'George']
  },
  {
    description: 'Meet with the Bills',
    participants: ['Bill', 'Bill', 'Peter']
  },
  { description: 'Working lunch', participants: ['Joe', 'Jane'] }
];

const todoList = [
  { id: 1, label: 'Attach cover letter to TPS report' },
  { id: 2, label: 'Double check decimal places' },
  { id: 3, label: 'Jump to conclusions' }
];

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export default class UserDashboardComponent {
  showProfile = true;
  nextMeetings = meetings;
  todos = todoList;

  addTodo() {
    // Add a new item at the beginning of the todo list.
    this.todos.unshift({
      id: 100,
      label: `Task ${this.todos.length + 1}`
    });
  }
}
