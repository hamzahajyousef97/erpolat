import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandalyeComponent } from './sandalye.component';

describe('SandalyeComponent', () => {
  let component: SandalyeComponent;
  let fixture: ComponentFixture<SandalyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandalyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandalyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
