import { Injectable } from '@angular/core';
import { ToDoItemInterface } from './to-do-item-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoDataService {
  url = 'http://143.244.183.182:8000/api/task';

  constructor(private http: HttpClient) {}

  getAllTodoItemsHttp(): Observable<ToDoItemInterface[]> {
    return this.http.get<ToDoItemInterface[]>('/api/task');
  }

  addNewTask(newTask: string): Observable<boolean> {
    return this.http.post<boolean>('/api/task', { title: newTask });
  }

  deleteTask(id: number): Observable<boolean> {
    return this.http.delete<boolean>('/api/task/' + id);
  }
}
