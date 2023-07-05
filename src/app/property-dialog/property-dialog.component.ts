import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-property-dialog',
  templateUrl: './property-dialog.component.html',
  styleUrls: ['./property-dialog.component.scss']
})
export class PropertyDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
