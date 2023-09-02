import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassErrorComponent } from './class-error.component';

describe('ClassErrorComponent', () => {
  let component: ClassErrorComponent;
  let fixture: ComponentFixture<ClassErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
