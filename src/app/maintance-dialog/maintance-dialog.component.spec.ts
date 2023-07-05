import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintanceDialogComponent } from './maintance-dialog.component';

describe('MaintanceDialogComponent', () => {
  let component: MaintanceDialogComponent;
  let fixture: ComponentFixture<MaintanceDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintanceDialogComponent]
    });
    fixture = TestBed.createComponent(MaintanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
