import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandealoneComponent } from './standealone.component';

describe('StandealoneComponent', () => {
  let component: StandealoneComponent;
  let fixture: ComponentFixture<StandealoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandealoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandealoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
