import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireinputComponent } from './fireinput.component';

describe('FireinputComponent', () => {
  let component: FireinputComponent;
  let fixture: ComponentFixture<FireinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
