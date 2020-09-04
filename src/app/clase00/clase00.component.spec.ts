import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase00Component } from './clase00.component';

describe('Clase00Component', () => {
  let component: Clase00Component;
  let fixture: ComponentFixture<Clase00Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clase00Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clase00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
