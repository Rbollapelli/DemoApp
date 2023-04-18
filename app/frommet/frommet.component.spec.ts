import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrommetComponent } from './frommet.component';

describe('FrommetComponent', () => {
  let component: FrommetComponent;
  let fixture: ComponentFixture<FrommetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrommetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrommetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
