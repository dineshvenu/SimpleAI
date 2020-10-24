import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotpopupComponent } from './chatbotpopup.component';

describe('ChatbotpopupComponent', () => {
  let component: ChatbotpopupComponent;
  let fixture: ComponentFixture<ChatbotpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
