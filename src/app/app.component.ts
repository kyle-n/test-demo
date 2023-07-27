import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected jokeCount = 0;
  protected joke: string | undefined;

  newJoke() {

  }
}
