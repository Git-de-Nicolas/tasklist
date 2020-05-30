import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Task} from "../entity/Task.entity";
import {TaskServiceService} from "../service/task-service.service";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})

export class TaskDetailComponent implements OnInit {

  task: Task;
  id: any;
  data: any;

  constructor(private  taskServiceService: TaskServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.getOne();

    // this.taskServiceService.getTaskbyID(this.id);
  }

  getOne() {
    this.taskServiceService.getOne(this.id).subscribe(data => {
      this.data = data;

      console.log(data)
    });
  }

  // ^ en utilisant 'task' ça foire donc changé par 'data' ?


  modifyTask() {
    this.taskServiceService
      .modifyTask(this.task).subscribe(() => { //undefined
      alert('tâche modifiée')
      this.router.navigate(['home'])
    });
  }

}
