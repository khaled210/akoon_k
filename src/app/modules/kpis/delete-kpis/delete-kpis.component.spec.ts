import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteKpisComponent } from './delete-kpis.component';

describe('DeleteKpisComponent', () => {
  let component: DeleteKpisComponent;
  let fixture: ComponentFixture<DeleteKpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteKpisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteKpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
