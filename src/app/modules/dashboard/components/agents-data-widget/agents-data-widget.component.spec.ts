import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsDataWidgetComponent } from './agents-data-widget.component';

describe('AgentsDataWidgetComponent', () => {
  let component: AgentsDataWidgetComponent;
  let fixture: ComponentFixture<AgentsDataWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgentsDataWidgetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsDataWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
