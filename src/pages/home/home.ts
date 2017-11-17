import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Quiz, QuizProvider, Result } from '../../providers/quiz';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  quiz: Quiz;
  result: Result;

  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private quizProvider: QuizProvider
  ) {
    this.quiz = this.quizProvider.currentQuiz;
  }

  calculateAnswer() {
    const loading = this.loadingController.create({
      content: 'Calculating...'
    });
    loading.present();

    setTimeout(() => {
      this.result = this.quiz.calculateResult();
      console.log(this.result);
      loading.dismiss();
    }, 500);
  }

}
