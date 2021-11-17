import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnRxjsComponent } from './rxjs-operators.component';

describe('LearnRxjsComponent', () => {
  let component: LearnRxjsComponent;
  let fixture: ComponentFixture<LearnRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnRxjsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
