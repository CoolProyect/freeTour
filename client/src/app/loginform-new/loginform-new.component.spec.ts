import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginformNewComponent } from './loginform-new.component';

describe('LoginformNewComponent', () => {
  let component: LoginformNewComponent;
  let fixture: ComponentFixture<LoginformNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginformNewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginformNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
