import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Quiz, QuizProvider } from '../../providers/quiz';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  quiz: Quiz;

  constructor(public navCtrl: NavController, private quizProvider: QuizProvider) {
    this.quiz = this.quizProvider.currentQuiz;
  }

}
