import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoDataService } from '../to-do-data.service';
import { ToDoItemInterface } from '../to-do-item-interface';

@Component({
  selector: 'app-to-do-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css',
})
export class ToDoItemComponent {
  @Input() toDoItem!: ToDoItemInterface;
  toDoDataService: ToDoDataService = inject(ToDoDataService);

  constructor() {}

  deleteTask(id: number) {
    this.toDoDataService.deleteTask(id).subscribe(() => {
      window.location.reload();
    });
  }
}
