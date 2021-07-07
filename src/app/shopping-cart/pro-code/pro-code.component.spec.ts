import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProCodeComponent } from './pro-code.component';

describe('ProCodeComponent', () => {
  let component: ProCodeComponent;
  let fixture: ComponentFixture<ProCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
