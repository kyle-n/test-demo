import { Component } from '@angular/core';
import { JokeTellerService } from './joke-teller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <header>
      <h1>Jokebot 9000</h1>
    </header>
    <main>
      <div *ngIf="jokeCount > 0">Joke #{{ jokeCount }}:
        <span id="good-joke">{{ joke | async }}</span>
      </div>
      <button (click)="newJoke()">Tell me a new joke</button>
    </main>
  `
})
export class AppComponent {
  jokeCount = 0;
  joke: Observable<string> | undefined;

  constructor(
    private jokeTellerService: JokeTellerService
  ) {
  }

  newJoke() {
    this.joke = this.jokeTellerService.tellJoke()
    this.jokeCount++;
  }
}
