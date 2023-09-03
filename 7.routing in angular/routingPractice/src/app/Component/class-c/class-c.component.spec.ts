import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCComponent } from './class-c.component';

describe('ClassCComponent', () => {
  let component: ClassCComponent;
  let fixture: ComponentFixture<ClassCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
