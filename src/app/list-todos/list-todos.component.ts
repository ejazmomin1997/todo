import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public targetdDate: Date,
    public done: boolean,
   
  ) { }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message :string;
  todos = []
    // todos = [
    //   new Todo(1, 'Learn angular', false, new Date()),
    //   new Todo(2, 'Learn java', false, new Date()),
    //   new Todo(3, 'goto jogging', false, new Date()),
    //   ]

  // todos = [ 
  //           {id:1,description:'learn angular',},
  //           {id:2,description:'practice coding',},
  //           {id:3,description:'go to jogging',}
  //         ]

  // todo = {
  //         id:1,
  //         description:'learn angular',
         
  // }

  constructor(private todoservice: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoservice.retriveAllTodos('ejaz').subscribe(
      response => {this.todos = response}
    );
  }

  deleteTodo(id){
    this.todoservice.deleteTodos('ejazMomin',id).subscribe(
      response=>{console.log(response);
      this.message = 'deleted record'
      this.refreshTodos();
      }
    );
  }

  updateTodo(id){
    this.router.navigate(['todo',id])
  }

  addTodo(id){
    this.router.navigate(['todo',-1])
  }
}
