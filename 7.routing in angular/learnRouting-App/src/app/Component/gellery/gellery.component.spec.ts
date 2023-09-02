import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gelleryComponent } from './gellery.component';

describe('gelleryComponent', () => {
  let component: gelleryComponent;
  let fixture: ComponentFixture<gelleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ gelleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(gelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
