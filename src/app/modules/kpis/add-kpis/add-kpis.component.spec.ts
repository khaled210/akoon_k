import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKpisComponent } from './add-kpis.component';

describe('AddKpisComponent', () => {
  let component: AddKpisComponent;
  let fixture: ComponentFixture<AddKpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKpisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
