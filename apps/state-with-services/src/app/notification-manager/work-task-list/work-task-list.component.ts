import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ToDoListComponent } from '../../todo-list/todo-list.component';
import { Task } from '../../types';

import { WorkTaskListService } from './work-task-list.service';

/*
  Components now pass and receive information between itself
  and services
*/
@Component({
  selector: 'app-work-task-list',
  templateUrl: './work-task-list.component.html',
  imports: [ToDoListComponent, AsyncPipe]
})
export class WorkTaskListComponent {
  private workTaskListService = inject(WorkTaskListService);

  done = this.workTaskListService.done;
  todo = this.workTaskListService.todo;

  checkbox = 'check_box';
  outline = 'check_box_outline_blank';

  setStatus(task: Task, complete: boolean) {
    this.workTaskListService.setTaskStatus(task, complete);
  }
}
