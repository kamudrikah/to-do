import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoItemInterface } from './to-do-item-interface';
import { ToDoDataService } from './to-do-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AddTaskFormComponent,
    ToDoItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'to-do';
  todoList: ToDoItemInterface[] = [];
  toDoDataService: ToDoDataService = inject(ToDoDataService);

  constructor() {
    this.toDoDataService.getAllTodoItemsHttp().subscribe((todos) => {
      this.todoList = todos;
    });
  }
}
