import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPropertyManagementComponent } from './admin-property-management.component';

describe('AdminPropertyManagementComponent', () => {
  let component: AdminPropertyManagementComponent;
  let fixture: ComponentFixture<AdminPropertyManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPropertyManagementComponent]
    });
    fixture = TestBed.createComponent(AdminPropertyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
