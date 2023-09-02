import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBComponent } from './class-b.component';

describe('ClassBComponent', () => {
  let component: ClassBComponent;
  let fixture: ComponentFixture<ClassBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
