import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvictionUploadComponent } from './eviction-upload.component';

describe('EvictionUploadComponent', () => {
  let component: EvictionUploadComponent;
  let fixture: ComponentFixture<EvictionUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvictionUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvictionUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
