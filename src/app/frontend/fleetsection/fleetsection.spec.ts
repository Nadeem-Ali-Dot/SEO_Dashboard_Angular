import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fleetsection } from './fleetsection';

describe('Fleetsection', () => {
  let component: Fleetsection;
  let fixture: ComponentFixture<Fleetsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fleetsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fleetsection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
