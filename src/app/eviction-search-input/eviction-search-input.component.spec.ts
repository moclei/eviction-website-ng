import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvictionSearchInputComponent } from './eviction-search-input.component';

describe('EvictionSearchInputComponent', () => {
  let component: EvictionSearchInputComponent;
  let fixture: ComponentFixture<EvictionSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvictionSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvictionSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
