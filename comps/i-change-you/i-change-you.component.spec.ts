import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IChangeYouComponent } from './i-change-you.component';

describe('IChangeYouComponent', () => {
  let component: IChangeYouComponent;
  let fixture: ComponentFixture<IChangeYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IChangeYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IChangeYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
