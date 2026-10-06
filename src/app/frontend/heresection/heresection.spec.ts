import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heresection } from './heresection';

describe('Heresection', () => {
  let component: Heresection;
  let fixture: ComponentFixture<Heresection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heresection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Heresection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
