import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo(0, '', '', false);
  // @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      item: true,
      'is-completed': this.todo.completed
    }
    return classes;
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  onDelete(todo: Todo) {

  }
}
