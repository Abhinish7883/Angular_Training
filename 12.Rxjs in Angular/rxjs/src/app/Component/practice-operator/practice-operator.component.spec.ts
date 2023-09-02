import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeOperatorComponent } from './practice-operator.component';

describe('PracticeOperatorComponent', () => {
  let component: PracticeOperatorComponent;
  let fixture: ComponentFixture<PracticeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
