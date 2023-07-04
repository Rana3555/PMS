import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.scss']
})
export class PropertyManagementComponent {
  property: any;
  filterOptions: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.management();
  }

  management() {
    this.http.get<any>('./assets/Json/management.json').subscribe((data) => {
      this.property = data.management;
      this.filterOptions = {
        statusOptions: data.statusOptions,
        propertyTypeOptions: data.propertyTypeOptions
      };
    });
  }
}
