import {Component, OnInit} from '@angular/core';
import {Task} from "../entity/Task.entity";
import {TaskServiceService} from "../service/task-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  id: number;
  task: Task[];
  newTask = new Task();

  constructor(private taskService: TaskServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(value => this.task = value);
  }

  createTask() {

    this.taskService
      .createTask(this.newTask).subscribe(() => {
      // Requête terminée, entitée crée

      alert('tâche ajoutée ! redirection vers page accueil')
      this.router.navigate(['home'])
    });
  }

}
