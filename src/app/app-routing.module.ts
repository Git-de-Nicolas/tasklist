import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddTaskComponent} from "./add-task/add-task.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {LatestNewsComponent} from "./latest-news/latest-news.component";
import {HomeComponent} from "./home/home.component";
import {TaskDetailComponent} from "./task-detail/task-detail.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-task', component: AddTaskComponent},
  {path: 'task-list', component: TaskListComponent},
  {path: 'latest-news', component: LatestNewsComponent},
  {path: 'task-detail', component: TaskDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
