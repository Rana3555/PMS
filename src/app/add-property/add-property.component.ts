import { Component } from '@angular/core';

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
}
