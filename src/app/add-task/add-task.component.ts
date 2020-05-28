import {Component, OnInit} from '@angular/core';
import {Task} from "../entity/Task.entity";
import {TaskServiceService} from "../service/task-service.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskServiceService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(value => {
      this.tasks = value;
    });

  }

  createTask() {
    const newTask = new Task();
    this.taskService
      .createTask(newTask).subscribe(() => {
      // Requête terminée, entitée crée
    });
  }

}
