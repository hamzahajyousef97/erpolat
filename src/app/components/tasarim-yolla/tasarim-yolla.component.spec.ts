import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasarimYollaComponent } from './tasarim-yolla.component';

describe('TasarimYollaComponent', () => {
  let component: TasarimYollaComponent;
  let fixture: ComponentFixture<TasarimYollaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasarimYollaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasarimYollaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
