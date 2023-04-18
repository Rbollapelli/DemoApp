import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperdispComponent } from './stepperdisp.component';

describe('StepperdispComponent', () => {
  let component: StepperdispComponent;
  let fixture: ComponentFixture<StepperdispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperdispComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
