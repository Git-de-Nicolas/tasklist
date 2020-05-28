import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../entity/Task.entity";

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://meshwork.tech/deploy/api/public/task');
  }

  createTask(task: Task) {
    return this.http.post('http://meshwork.tech/deploy/api/public/task', task);
  }

}
