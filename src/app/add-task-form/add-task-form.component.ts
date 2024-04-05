import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoDataService } from '../to-do-data.service';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <form class="w-full max-w-sm mx-auto px-4 py-2">
      <div class="flex items-center border-b-2 border-amber-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Add a task"
          autofocus
          #newTaskInput
        />
        <button
          class="flex-shrink-0 bg-amber-500 hover:bg-amber-700 border-amber-500 hover:border-amber-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
          (click)="addNewTask(newTaskInput.value)"
        >
          Add
        </button>
      </div>
    </form>
  `,
  styleUrl: './add-task-form.component.css',
})
export class AddTaskFormComponent {
  toDoDataService: ToDoDataService = inject(ToDoDataService);
  addTaskStatus: boolean = false;

  constructor() {}

  addNewTask(newTaskInput: string) {
    this.toDoDataService.addNewTask(newTaskInput).subscribe((addTaskStatus) => {
      this.addTaskStatus = addTaskStatus;
      window.location.reload();
    });
  }
}
