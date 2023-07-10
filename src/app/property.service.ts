import { Injectable } from '@angular/core';
import { Property } from './model/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private localStorageKey = 'propertyData';
  property: Property | null;

  constructor() {
    const storedData = localStorage.getItem(this.localStorageKey);
    this.property = storedData ? JSON.parse(storedData) : null;
  }

  savePropertyData(property: Property): void {
    this.property = property;
    localStorage.setItem(this.localStorageKey, JSON.stringify(property));
  }

  clearPropertyData(): void {
    this.property = null;
    localStorage.removeItem(this.localStorageKey);
  }
}
