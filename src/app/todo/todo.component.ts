import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
id:number
todo: Todo
  constructor(private todoSerive: TodoDataService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if(this.id != -1){
    this.todoSerive.retriveTodo('ejaz', this.id).subscribe(
      response => this.todo = response
    
    )
    }
  }

  saveTodo(){
    if(this.id === -1){
      this.todoSerive.createTodo('ejaz', this.todo).subscribe(response => {
        console.log(response)
      this.router.navigate(['todos'])
    }
    
  )
    }else{
      this.todoSerive.updateTodo('ejaz', this.id, this.todo).subscribe(response => {
        console.log(response)
      this.router.navigate(['todos'])
    }
    
  )
  }
}
}
