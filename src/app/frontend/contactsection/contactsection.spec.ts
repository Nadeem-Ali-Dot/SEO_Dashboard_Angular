import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactsection } from './contactsection';

describe('Contactsection', () => {
  let component: Contactsection;
  let fixture: ComponentFixture<Contactsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactsection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
