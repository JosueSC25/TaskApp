import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Task {
  title: string;
  description: string;
  status: 'Pendiente' | 'Listo';
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private storageReady = false;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.storageReady = true;
    this.tasks = (await this.storage.get('tasks')) || []; // Carga tareas del almacenamiento
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  async addTask(task: Task) {
    this.tasks.push(task);
    await this.saveTasks();
  }

  async deleteTask(index: number) {
    this.tasks.splice(index, 1);
    await this.saveTasks();
  }

  async updateTaskStatus(index: number, status: 'Pendiente' | 'Listo') {
    this.tasks[index].status = status;
    await this.saveTasks();
  }

  private async saveTasks() {
    if (this.storageReady) {
      await this.storage.set('tasks', this.tasks);
    }
  }
}
