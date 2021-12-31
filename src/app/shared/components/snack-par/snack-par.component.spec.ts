import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackParComponent } from './snack-par.component';

describe('SnackParComponent', () => {
  let component: SnackParComponent;
  let fixture: ComponentFixture<SnackParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackParComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
