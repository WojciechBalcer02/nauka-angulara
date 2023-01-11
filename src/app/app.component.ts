import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nauka-angulara';
  tasks = 'Brak zadań, masz czas wolny!'
  tasksList: Array<string> = [];
  tasksListDone: Array<string> = [];
  newTask: string = ''; 
  add(){
    this.tasksList.push(this.newTask);
    this.newTask = '';
  }
  remove(task:string){
    this.tasksList = this.tasksList.filter(e=>e !==task);
  }
  done(task:string){
    this.tasksListDone.push(task);
    this.remove(task);
  }
}
