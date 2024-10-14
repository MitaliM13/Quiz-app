import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  // private Questions = [
  //   {
  //     question: 'What is the largest planet in our Solar System?',
  //     options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
  //     answer: 'Jupiter'
  //   },
  //   {
  //     question: 'Who wrote "Romeo and Juliet"?',
  //     options: ['Charles Dickens', 'Mark Twain', 'William Shakespeare', 'Jane Austen'],
  //     answer: 'William Shakespeare'
  //   },
  //   {
  //     question: 'What is the chemical symbol for water?',
  //     options: ['H2O', 'O2', 'CO2', 'NaCl'],
  //     answer: 'H2O'
  //   },
  //   {
  //     question: 'Which element has the atomic number 1?',
  //     options: ['Helium', 'Hydrogen', 'Oxygen', 'Carbon'],
  //     answer: 'Hydrogen'
  //   },
  //   {
  //     question: 'What year did the Titanic sink?',
  //     options: ['1912', '1905', '1898', '1920'],
  //     answer: '1912'
  //   },
  //   {
  //     question: 'What is the currency of Japan?',
  //     options: ['Yen', 'Dollar', 'Euro', 'Won'],
  //     answer: 'Yen'
  //   },
  //   {
  //     question: 'Which planet is known as the Red Planet?',
  //     options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
  //     answer: 'Mars'
  //   },
  //   {
  //     question: 'Who painted the Mona Lisa?',
  //     options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
  //     answer: 'Leonardo da Vinci'
  //   }    
  // ]
  
  // getQuestions() {
  //   return this.Questions
  // }

  url = 'https://opentdb.com/api.php?amount=40'
  constructor(private http: HttpClient){}
  users():Observable<any>{
    return this.http.get(this.url)
  }
}
