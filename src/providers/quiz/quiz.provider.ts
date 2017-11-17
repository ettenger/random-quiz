import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable()
export class QuizProvider {
  currentQuiz: Quiz;

  constructor() {
    this.currentQuiz = new Quiz();
    console.log('quiz', this.currentQuiz);
  }

}
