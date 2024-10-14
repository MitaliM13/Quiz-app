// src/app/quiz/quiz.component.ts
import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  // questions: any[];
  // currentQuestionIndex = 0;
  // score = 0;
  // showResult = false;

  // constructor(private quizService: QuizService) {
  //   // this.questions = this.quizService.getQuestions();
  // }

  // selectAnswer(option: string) {
  //   if (this.questions[this.currentQuestionIndex].answer === option) {
  //     this.score++;
  //   }
  //   this.currentQuestionIndex++;

  //   if (this.currentQuestionIndex >= this.questions.length) {
  //     this.showResult = true;
  //   }
  // }
  // users :any[] = []
  // constructor(private userData: QuizService){
  //   userData.users().subscribe((data:any) => { this.users = data.results
  //     console.log('data',data);
  //     console.log("user array ", this.users )
  //   })    
  // }
}
