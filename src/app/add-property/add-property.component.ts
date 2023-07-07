import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import { Property } from '../model/property.model';
import { Router } from '@angular/router';
import { PropertyService } from '../property.service';

export interface Place {
  name: string;
}
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent {
  selectedImage: string | ArrayBuffer | null = null;
  fileToUpload: File | null = null;
  propertyForm: FormGroup;
  formSubmitted = false;
  property!: Property;

  constructor(private formBuilder: FormBuilder, private router: Router, private propertyService: PropertyService) {
    this.propertyForm = this.formBuilder.group({
      propertyName: ['', Validators.required],
      status: ['', Validators.required],
      streetName: ['', Validators.required],
      state: ['', Validators.required],
      description: ['', Validators.required],
      propertyType: ['', Validators.required],
      rent: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      maintenanceHistory: ['', Validators.required],
    });
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


  handleFileInput(event: any) {
    this.fileToUpload = event.target.files.item(0);
    if (this.fileToUpload) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(this.fileToUpload);
    }
  }

  isFieldInvalid(field: string): boolean {
    const formField = this.propertyForm.get(field) as FormControl;
    return (
      formField.invalid &&
      (formField.touched || formField.dirty || this.formSubmitted)
    );
  }

  addProperty() {
    this.formSubmitted = true;

    if (this.propertyForm.valid) {
      this.property = {
        propertyName: this.propertyForm.value.propertyName,
        status: this.propertyForm.value.status,
        streetName: this.propertyForm.value.streetName,
        state: this.propertyForm.value.state,
        description: this.propertyForm.value.description,
        propertyType: this.propertyForm.value.propertyType,
        rent: this.propertyForm.value.rent,
        city: this.propertyForm.value.city,
        zipCode: this.propertyForm.value.zipCode,
        maintenanceHistory: this.propertyForm.value.maintenanceHistory,
        image: this.selectedImage,
        places: this.Places.map(place => place.name)
      };
      this.propertyService.savePropertyData(this.property);
      this.router.navigate(['/property-management'], { state: { property: this.property } });
    } else {
      this.propertyForm.markAllAsTouched();
    }
  }

}
