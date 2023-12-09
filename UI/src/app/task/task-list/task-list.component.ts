import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  constructor(private service:SharedService){

  }
 taskList:any=[];
 ngOnInit(): void {
   this.refreshTaskList();
 }


 refreshTaskList(){
  this.service.gettaskList().subscribe(data =>{
    this.taskList = data;
  });
 }
}