import { Component } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.page.html',
  styleUrls: ['./nueva-tarea.page.scss'],
})
export class NuevaTareaPage {
  title = '';
  description = '';

  constructor(private taskService: TaskService, private router: Router) {}

  addTask() {
    const newTask: Task = {
      title: this.title,
      description: this.description,
      status: 'Pendiente',
    };
    this.taskService.addTask(newTask);
    this.router.navigate(['/tareas']);
  }
}
