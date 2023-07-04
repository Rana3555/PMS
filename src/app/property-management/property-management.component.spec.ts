import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyManagementComponent } from './property-management.component';

describe('PropertyManagementComponent', () => {
  let component: PropertyManagementComponent;
  let fixture: ComponentFixture<PropertyManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyManagementComponent]
    });
    fixture = TestBed.createComponent(PropertyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
