import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Place {
  name: string;
}
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  Places: Place[] = [
    { name: 'hyd' },
    { name: 'vij' },
    { name: 'rjy' },
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our Place
    if ((value || '').trim()) {
      this.Places.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(Place: Place): void {
    const index = this.Places.indexOf(Place);

    if (index >= 0) {
      this.Places.splice(index, 1);
    }
  }
}
