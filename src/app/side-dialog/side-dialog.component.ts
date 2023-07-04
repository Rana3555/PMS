import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-side-dialog',
  templateUrl: './side-dialog.component.html',
  styleUrls: ['./side-dialog.component.scss']
})
export class SideDialogComponent  {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

