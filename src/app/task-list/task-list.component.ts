import {Component, OnInit} from '@angular/core';
import {Task} from "../entity/Task.entity";
import {TaskServiceService} from "../service/task-service.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskServiceService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(value => {
      this.tasks = value;
    });
  }
}
