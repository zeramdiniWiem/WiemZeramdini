import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionShoesComponent } from './gestion-shoes.component';

describe('GestionShoesComponent', () => {
  let component: GestionShoesComponent;
  let fixture: ComponentFixture<GestionShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionShoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
