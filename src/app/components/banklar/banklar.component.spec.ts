import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanklarComponent } from './banklar.component';

describe('BanklarComponent', () => {
  let component: BanklarComponent;
  let fixture: ComponentFixture<BanklarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanklarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanklarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
