import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingNoteComponent } from './reading-note.component';

describe('ReadingNoteComponent', () => {
  let component: ReadingNoteComponent;
  let fixture: ComponentFixture<ReadingNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
