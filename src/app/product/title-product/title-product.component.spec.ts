import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleProductComponent } from './title-product.component';

describe('TitleProductComponent', () => {
  let component: TitleProductComponent;
  let fixture: ComponentFixture<TitleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
