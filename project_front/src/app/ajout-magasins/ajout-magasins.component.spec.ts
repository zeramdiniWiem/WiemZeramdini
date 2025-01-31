import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMagasinsComponent } from './ajout-magasins.component';

describe('AjoutMagasinsComponent', () => {
  let component: AjoutMagasinsComponent;
  let fixture: ComponentFixture<AjoutMagasinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMagasinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutMagasinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
