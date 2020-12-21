import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActiveComponent } from './can-active.component';

describe('CanActiveComponent', () => {
  let component: CanActiveComponent;
  let fixture: ComponentFixture<CanActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
