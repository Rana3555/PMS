import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-maintance-dialog',
  templateUrl: './maintance-dialog.component.html',
  styleUrls: ['./maintance-dialog.component.scss']
})
export class MaintanceDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
