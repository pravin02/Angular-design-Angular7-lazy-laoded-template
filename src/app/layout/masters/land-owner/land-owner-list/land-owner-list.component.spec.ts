import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandOwnerListComponent } from './land-owner-list.component';

describe('LandOwnerListComponent', () => {
  let component: LandOwnerListComponent;
  let fixture: ComponentFixture<LandOwnerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandOwnerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandOwnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
