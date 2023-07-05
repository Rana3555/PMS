import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PropertyDialogComponent } from '../property-dialog/property-dialog.component';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.scss']
})
export class PropertyManagementComponent {
  // property: any;
  property: any[] = [];

  filterOptions: any;

  constructor(private dialog: MatDialog, private http: HttpClient) {}

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
  userDialog(propertyId: number) {
    const property = this.property.find(p => p.id === propertyId);
    if (property) {
      const dialogRef = this.dialog.open(PropertyDialogComponent, {
        width: '30%',
        height: '100%',
        position: { right: '0' },
        data: {
          id: property.id,
          imagePath: property.imagePath,
          name: property.name
        },
      });
      dialogRef.afterClosed().subscribe((res:any) => {
        // Handle dialog close event
      });
    }
  }
}
