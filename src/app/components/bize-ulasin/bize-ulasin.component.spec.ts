import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizeUlasinComponent } from './bize-ulasin.component';

describe('BizeUlasinComponent', () => {
  let component: BizeUlasinComponent;
  let fixture: ComponentFixture<BizeUlasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizeUlasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizeUlasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
