import { QUESTION_GROUPS } from './question-groups';
import { REVEALS } from './reveals';
import { VERBS } from './verbs';
import { Result } from './result';

export class Quiz {
  question: string;
  reveal: string;
  verb: string;
  
  constructor() {
    this.question = this.randomKey(QUESTION_GROUPS);
    this.reveal = this.randomKey(REVEALS);
    this.verb = this.randomItem(VERBS);
  }

  randomKey(object: {}): string {
    const keys = Object.keys(object);
    return this.randomItem(keys);
  }

  randomItem(arr: any[]): any {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  get title(): string {
    return `What your ${this.question} ${this.verb} about ${this.reveal}?`
  }

  calculateResult(): Result {
    const possibleAnswers = REVEALS[this.reveal];
    return this.randomItem(possibleAnswers);
  }
}