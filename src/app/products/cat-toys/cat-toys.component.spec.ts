import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatToysComponent } from './cat-toys.component';

describe('CatToysComponent', () => {
  let component: CatToysComponent;
  let fixture: ComponentFixture<CatToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatToysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
