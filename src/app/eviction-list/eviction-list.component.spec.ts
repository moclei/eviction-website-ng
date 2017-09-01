import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvictionListComponent } from './eviction-list.component';

describe('EvictionListComponent', () => {
  let component: EvictionListComponent;
  let fixture: ComponentFixture<EvictionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvictionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvictionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
