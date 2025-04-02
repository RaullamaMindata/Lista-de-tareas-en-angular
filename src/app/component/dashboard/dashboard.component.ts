import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../service/crud.service';
import {Task} from '../../model/task';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  taskObj : Task = new Task();
  taskArr : Task[] = [];
  completedTasks: Task[] = []; // Tareas completadas
  incompleteTasks: Task[] = []; // Tareas no completadas

  addTaskValue : string = '';
  editTaskValue : string = '';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.completedTasks = [];
    this.incompleteTasks = [];
    this.getAllTasks();
  }

  addTask() {
    if (this.addTaskValue === '') {
      alert('El nombre de la tarea no puede estar vacío');
      return;
    }
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe({
      next: (res) => {
        this.ngOnInit();
      },
      error: (err) => {
        alert(err.message);
      }
    });
  }

  private getAllTasks() {
    this.crudService.getAllTask().subscribe({
      next: (res) => {
        this.taskArr = res;

        // Filtrar tareas no completadas
        this.incompleteTasks = this.taskArr.filter(task => !task.completed);

        // Filtrar tareas completadas
        this.completedTasks = this.taskArr.filter(task => task.completed);
      },
      error: (err) => {
        alert("No se puede obtener la lista de tareas");
      }
    });
  }

  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe({
      next: (res) => {
        this.ngOnInit();
      },
      error: (err) => {
        alert("No se pudo actualizar la tarea");
      }
    });
  }

  deleteTask(etask : Task) {
    this.crudService.deleteTask(etask).subscribe({
      next: (res) => {
        this.ngOnInit();
      },
      error: (err) => {
        alert("No se pudo eliminar la tarea");
      }
    });
  }
  call(etask : Task) {
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }

  switchTaskStatus(task : Task) {
    task.completed =!task.completed;
    this.crudService.editTask(task).subscribe({
      next: (res) => {
        this.ngOnInit();
      },
      error: (err) => {
        alert("No se pudo cambiar el estado de la tarea");
      }
    });
  }
}
