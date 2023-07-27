import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { JokeTellerService } from './joke-teller.service';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        AppComponent
      ],
      providers: [JokeTellerService]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  function clickJokeButton(): void {
    const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    button.dispatchEvent(new Event('click'));
  }

  function displayedJoke(): string | null {
    const jokeContainer = fixture.debugElement.query(By.css('#good-joke'))?.nativeElement as HTMLSpanElement | null;
    if (jokeContainer) {
      return jokeContainer.innerText.trim()
    } else {
      return null;
    }
  }

  it('should tell a joke when the user clicks the button', () => {
    expect(displayedJoke()).toBeNull()
    clickJokeButton()
    fixture.detectChanges()
    expect(displayedJoke()).not.toBeNull();
  })
});
