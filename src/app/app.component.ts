import { Component } from '@angular/core';
import { JokeTellerService } from './joke-teller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jokeCount = 0;
  joke: string | undefined;

  constructor(
    private jokeTellerService: JokeTellerService
  ) {
  }

  newJoke() {
    this.joke = this.jokeTellerService.tellJoke();
    this.jokeCount++;
  }
}
