import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeTellerService {
  // Courtesy https://www.scarymommy.com/popsicle-jokes
  private jokes = [
    `How did the telephone propose to his girlfriend?
     He gave her a ring.`,
    `What crew mans a haunted ship?
     A skeleton crew.`,
    `Where do cows go for entertainment?
     Moo-vies.`,
  ]

  private jokeIndex = 0;

  tellJoke(): string {
    const jokeToTell = this.jokes[this.jokeIndex];
    this.jokeIndex = (this.jokeIndex + 1) % this.jokes.length;
    return jokeToTell;
  }
}
