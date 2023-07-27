import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

type DadJokeResponse = {
  id: string;
  joke: string;
  status: number;
}

@Injectable({
  providedIn: 'root'
})
export class JokeTellerService {

  constructor(private httpClient: HttpClient) {
  }

  tellJoke(): Observable<string> {
    const url = 'https://icanhazdadjoke.com'
    const headers = new HttpHeaders({
      Accept: 'application/json'
    })
    return this.httpClient.get<DadJokeResponse>(url, {headers}).pipe(
      map(response => response.joke)
    )
  }
}
