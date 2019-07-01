import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaySmallExampleComponent } from './two-way-small-example.component';

describe('TwoWaySmallExampleComponent', () => {
  let component: TwoWaySmallExampleComponent;
  let fixture: ComponentFixture<TwoWaySmallExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWaySmallExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWaySmallExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
