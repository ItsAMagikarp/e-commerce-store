import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombayCatComponent } from './bombay-cat.component';

describe('BombayCatComponent', () => {
  let component: BombayCatComponent;
  let fixture: ComponentFixture<BombayCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BombayCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BombayCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
