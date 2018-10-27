import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalincaklarComponent } from './salincaklar.component';

describe('SalincaklarComponent', () => {
  let component: SalincaklarComponent;
  let fixture: ComponentFixture<SalincaklarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalincaklarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalincaklarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
