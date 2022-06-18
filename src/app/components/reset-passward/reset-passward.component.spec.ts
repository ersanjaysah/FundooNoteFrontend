import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswardComponent } from './reset-passward.component';

describe('ResetPasswardComponent', () => {
  let component: ResetPasswardComponent;
  let fixture: ComponentFixture<ResetPasswardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
