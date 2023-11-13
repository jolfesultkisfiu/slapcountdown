import { TestBed } from '@angular/core/testing';
import { CountdownComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CountdownComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'untitled3' title`, () => {
    const fixture = TestBed.createComponent(CountdownComponent);
    const app = fixture.componentInstance;
    // @ts-ignore
    expect(app.title).toEqual('untitled3');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CountdownComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, untitled3');
  });

});
