import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos =>{
      this.todos = todos;
    })
    // this.todos = [
    //   {
    //     "id": 1,
    //     "title": "Buy fruits",
    //     "completed": true
    //   },{
    //     "id": 2,
    //     "title": "Buy devices",
    //     "completed": false
    //   }
    // ]
  }

}
