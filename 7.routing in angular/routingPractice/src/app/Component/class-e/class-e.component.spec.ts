import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEComponent } from './class-e.component';

describe('ClassEComponent', () => {
  let component: ClassEComponent;
  let fixture: ComponentFixture<ClassEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
