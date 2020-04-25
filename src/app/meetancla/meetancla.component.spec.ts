import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetanclaComponent } from './meetancla.component';

describe('MeetanclaComponent', () => {
  let component: MeetanclaComponent;
  let fixture: ComponentFixture<MeetanclaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetanclaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetanclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
