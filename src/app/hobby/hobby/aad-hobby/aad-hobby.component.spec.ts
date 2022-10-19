import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadHobbyComponent } from './aad-hobby.component';

describe('AadHobbyComponent', () => {
  let component: AadHobbyComponent;
  let fixture: ComponentFixture<AadHobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadHobbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AadHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
