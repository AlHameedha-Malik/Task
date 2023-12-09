import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskCreateComponent } from './task/task-create/task-create.component';
import { TaskListComponent } from './task/task-list/task-list.component';

const routes: Routes = [
  {path : 'task-create',component:TaskCreateComponent},
  {path : 'task-list',component:TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
