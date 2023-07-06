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

  profileImage: string | null = null;

// onFileSelected(event: Event) {
//     const inputElement = event.target as HTMLInputElement;
//     const files = (inputElement.files as FileList);
//     if (files && files.length > 0) {
//       const file = files[0];
//       const reader = new FileReader();
//       reader.onload = (event: ProgressEvent<FileReader>) => {
//         this.profileImage = event.target?.result as string;
//       };
//       reader.readAsDataURL(file);
//     }

//   }
    url = '../../assets/house-imgs (7).png';
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        console.log(event);
        this.url = event.target.result;
      }
    }
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  Places: Place[] = [
    { name: 'Hyderabad' },
    { name: 'Vijayawada' },
    { name: 'Rajamadry' },
    { name: 'Visakhapatnam' },
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
