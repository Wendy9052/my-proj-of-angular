import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationBarComponent } from './main-navigation-bar.component';

describe('MainNavigationBarComponent', () => {
  let component: MainNavigationBarComponent;
  let fixture: ComponentFixture<MainNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavigationBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
