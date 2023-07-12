import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroHomeComponent } from './micro-home.component';

describe('MicroHomeComponent', () => {
  let component: MicroHomeComponent;
  let fixture: ComponentFixture<MicroHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroHomeComponent]
    });
    fixture = TestBed.createComponent(MicroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
