import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaksiliklarComponent } from './saksiliklar.component';

describe('SaksiliklarComponent', () => {
  let component: SaksiliklarComponent;
  let fixture: ComponentFixture<SaksiliklarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaksiliklarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaksiliklarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
