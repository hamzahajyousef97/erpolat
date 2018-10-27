import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitaplikComponent } from './kitaplik.component';

describe('KitaplikComponent', () => {
  let component: KitaplikComponent;
  let fixture: ComponentFixture<KitaplikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitaplikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitaplikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
