import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Feature1Component } from './feature-1.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Feature1Component
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Feature1Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'translation-app'`, () => {
    const fixture = TestBed.createComponent(Feature1Component);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('translation-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Feature1Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('translation-app app is running!');
  });
});
