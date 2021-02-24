import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaUpdateComponent } from './denuncia-update.component';

describe('DenunciaUpdateComponent', () => {
  let component: DenunciaUpdateComponent;
  let fixture: ComponentFixture<DenunciaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenunciaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
