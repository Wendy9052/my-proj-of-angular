import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookEditAddComponent } from './cook-edit-add.component';

describe('CookEditAddComponent', () => {
  let component: CookEditAddComponent;
  let fixture: ComponentFixture<CookEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookEditAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
