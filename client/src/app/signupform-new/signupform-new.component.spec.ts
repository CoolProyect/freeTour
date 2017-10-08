import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupformNewComponent } from './signupform-new.component';

describe('SignupformNewComponent', () => {
  let component: SignupformNewComponent;
  let fixture: ComponentFixture<SignupformNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupformNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupformNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
