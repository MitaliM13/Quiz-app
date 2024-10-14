import { Component } from '@angular/core';
import {QuizService} from './quiz.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuizApp';
  users :any[] = []
  constructor(private userData: QuizService){
    userData.users().subscribe((data:any) => { this.users = data.results
      console.log('data',data);
      console.log("user array ", this.users )
    })    
  }
}
