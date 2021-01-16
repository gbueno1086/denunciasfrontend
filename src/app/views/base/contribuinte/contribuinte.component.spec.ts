import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuinteComponent } from './contribuinte.component';

describe('ContribuinteComponent', () => {
  let component: ContribuinteComponent;
  let fixture: ComponentFixture<ContribuinteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuinteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
