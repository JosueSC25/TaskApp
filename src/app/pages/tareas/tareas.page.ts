import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TaskService, Task  } from '../../services/task.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {
  tasks: Task[] = []; // Inicializamos como vacío

  constructor(private taskService: TaskService, private alertController: AlertController) {}

  ngOnInit() {
    this.loadTasks(); // Cargamos las tareas cuando se inicializa
  }

  ionViewWillEnter() {
    this.loadTasks(); // También cargamos tareas cada vez que se entra a la vista
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks(); // Sincronizamos las tareas del servicio
  }

  

 // constructor(private taskService: TaskService) {}

  async confirmDelete(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar esta tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.taskService.deleteTask(index);
          },
        },
      ],
    });

    await alert.present();
  }
}
