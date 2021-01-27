import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name=''
  welcomeMessage = ''
  welcomeMessageErrorMessage = ''
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
   console.log(this.route.snapshot.params['name'])
   this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
   
    this.service.executeWelcomeHelloBean().subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    
    );
    console.log('getWelcome message');
  }

  handleResponse(response){
    this.welcomeMessage = response.message

  }

  handleError(error){
  this.welcomeMessageErrorMessage = error.error.message

  }

  getWelcomeMessageWithPathVariable(){
   
    this.service.executeWelcomeWithPathVariable(this.name).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    
    );
    console.log('getWelcome message');
  }

}
