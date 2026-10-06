import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ourservicesection } from './ourservicesection';

describe('Ourservicesection', () => {
  let component: Ourservicesection;
  let fixture: ComponentFixture<Ourservicesection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ourservicesection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ourservicesection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
