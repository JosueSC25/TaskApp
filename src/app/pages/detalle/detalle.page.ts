import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  task: Task | undefined;
  isTaskDone = false; // Variable para el estado del ion-toggle

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const taskIndex = parseInt(id, 10);
const tasks = this.taskService.getTasks(); // Obtén todas las tareas
this.task = tasks[taskIndex]; // Asigna la tarea específica según su índice
this.isTaskDone = this.task?.status === 'Listo'; // Actualiza el estado del toggle
    }
  }

  onStatusChange(event: any) {
    if (this.task) {
      const newStatus = event.detail.checked ? 'Listo' : 'Pendiente';
      const taskIndex = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
      this.taskService.updateTaskStatus(taskIndex, newStatus);
      this.task.status = newStatus; // Actualiza la vista
    }
  }
}

