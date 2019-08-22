import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandOwnerAddComponent } from './land-owner-add.component';

describe('LandOwnerAddComponent', () => {
  let component: LandOwnerAddComponent;
  let fixture: ComponentFixture<LandOwnerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandOwnerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandOwnerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
