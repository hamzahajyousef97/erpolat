import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TVunitesiComponent } from './tvunitesi.component';

describe('TVunitesiComponent', () => {
  let component: TVunitesiComponent;
  let fixture: ComponentFixture<TVunitesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TVunitesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TVunitesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
