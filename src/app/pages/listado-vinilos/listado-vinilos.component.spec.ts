import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVinilosComponent } from './listado-vinilos.component';

describe('ListadoVinilosComponent', () => {
  let component: ListadoVinilosComponent;
  let fixture: ComponentFixture<ListadoVinilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoVinilosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVinilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
