import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaVinilosComponent } from './alta-vinilos.component';

describe('AltaVinilosComponent', () => {
  let component: AltaVinilosComponent;
  let fixture: ComponentFixture<AltaVinilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaVinilosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaVinilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
