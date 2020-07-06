import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazycomponentComponent } from './lazycomponent.component';

describe('LazycomponentComponent', () => {
  let component: LazycomponentComponent;
  let fixture: ComponentFixture<LazycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
