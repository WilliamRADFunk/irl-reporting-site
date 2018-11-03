import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  describe('mobileCollapseState', () => {
    it('should change showState to false', fakeAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      app.mobileCollapseState();
      expect(app.showState).toBe(false);
    }));
  });
  describe('toggleCollapseState', () => {
    it('should toggle showState', fakeAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      app.toggleCollapseState();
      tick(300);
      expect(app.showState).toBe(true);
      app.toggleCollapseState();
      tick(300);
      expect(app.showState).toBe(false);
    }));
  });
});
