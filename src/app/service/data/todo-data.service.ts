import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retriveAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8081/user/${username}/todos`)
    
  }

  deleteTodos(username, id){
    return this.http.delete(`http://localhost:8081//user/${username}/todos/${id}`)
    
  }

  retriveTodo(username, id){
    return this.http.get<Todo>(`http://localhost:8081//user/${username}/todo/${id}`)
    
  }

  updateTodo(username, id, todo){
    return this.http.put(`http://localhost:8081//user/${username}/todo/${id}`, todo)
    
  }

  createTodo(username, todo){
    return this.http.post(`http://localhost:8081//user/${username}/todos`, todo)
    
  }

 
}
