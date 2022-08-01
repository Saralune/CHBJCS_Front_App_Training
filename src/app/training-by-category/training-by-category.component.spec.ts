import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingByCategoryComponent } from './training-by-category.component';

describe('TrainingByCategoryComponent', () => {
  let component: TrainingByCategoryComponent;
  let fixture: ComponentFixture<TrainingByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
