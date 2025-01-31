import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutShoesComponent } from './ajout-shoes.component';

describe('AjoutShoesComponent', () => {
  let component: AjoutShoesComponent;
  let fixture: ComponentFixture<AjoutShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutShoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
