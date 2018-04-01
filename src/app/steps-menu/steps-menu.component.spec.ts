import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsMenuComponent } from './steps-menu.component';

describe('StepsMenuComponent', () => {
  let component: StepsMenuComponent;
  let fixture: ComponentFixture<StepsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
