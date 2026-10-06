import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallerysection } from './gallerysection';

describe('Gallerysection', () => {
  let component: Gallerysection;
  let fixture: ComponentFixture<Gallerysection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallerysection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gallerysection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
