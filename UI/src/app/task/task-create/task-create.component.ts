import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-task',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  taskForm: FormGroup;
  taskName: string = '';
  taskDescription: string = '';
  selectedEmployee: string = '';
  successMessage: string = '';

  employees: any[] = []; // Add a property to store the list of employees

  constructor(private service: SharedService, private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      taskName: ['', Validators.required], // Make taskName mandatory
      taskDescription: [''],
      selectedEmployee: ['']
    });
  }

  ngOnInit(): void {
    this.loadEmployeeList(); // Load the list of employees when the component is initialized
  }

  loadEmployeeList() {
    this.service.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  createTask() {
    // Check if the form is valid before proceeding
    if (this.taskForm.valid) {
      const taskData = {
        taskName: this.taskForm.value.taskName,
        taskDescription: this.taskForm.value.taskDescription,
        employeeName: this.taskForm.value.selectedEmployee
      };

      this.service.addTask(taskData).subscribe(response => {
        this.successMessage = 'Task added and assigned to ' + this.taskForm.value.selectedEmployee;
        console.log('Task created successfully:', response);

        // Clear the form after successful task creation
        this.taskForm.reset();
      });
    } else {
      // Handle the case where the form is not valid
      console.log('Form is not valid. Please check the required fields.');
    }
  }
}
