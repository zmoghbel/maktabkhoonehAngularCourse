import { Component, OnInit } from '@angular/core';
import { Task, ProjectService } from '../services/project.service';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent implements OnInit {
  newTitle: string;
  newProjectID: number;
  deadline;

  constructor(private projectService: ProjectService) {
    this.newProjectID = 0;
  }

  ngOnInit() {
  }

  addNewTask() {
    const convertedDeadline = new Date(this.deadline.year, this.deadline.month - 1, this.deadline.day, 0, 0, 0)
    let task: Task = new Task(this.newTitle, false, this.newProjectID, new Date(), convertedDeadline);
    console.log(this.newProjectID);
    this.projectService.addTaskToProject(task, this.newProjectID);
  }

  getProjectsTitle() {
    // let titles = new Array<String>();
    // for (let project of this.projectService.getProjects()) {
    //   titles.push(project.title);
    // }

    // return titles;

    return this.projectService.getProjects();
  }

}
