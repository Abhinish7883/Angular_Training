import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTyoypeComponent } from './select-tyoype.component';

describe('SelectTyoypeComponent', () => {
  let component: SelectTyoypeComponent;
  let fixture: ComponentFixture<SelectTyoypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTyoypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTyoypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
