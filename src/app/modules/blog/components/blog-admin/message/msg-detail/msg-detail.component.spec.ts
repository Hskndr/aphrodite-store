import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgDetailComponent } from './msg-detail.component';

describe('MsgDetailComponent', () => {
  let component: MsgDetailComponent;
  let fixture: ComponentFixture<MsgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
