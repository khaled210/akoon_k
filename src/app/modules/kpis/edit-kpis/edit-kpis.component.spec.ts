import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKpisComponent } from './edit-kpis.component';

describe('EditKpisComponent', () => {
  let component: EditKpisComponent;
  let fixture: ComponentFixture<EditKpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditKpisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
