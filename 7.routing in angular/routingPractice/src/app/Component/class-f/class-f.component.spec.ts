import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFComponent } from './class-f.component';

describe('ClassFComponent', () => {
  let component: ClassFComponent;
  let fixture: ComponentFixture<ClassFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
