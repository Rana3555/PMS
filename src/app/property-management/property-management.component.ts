import { HttpClient } from '@angular/common/http';
import { Component,Input  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PropertyDialogComponent } from '../property-dialog/property-dialog.component';
import { Property } from '../model/property.model';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.scss']
})
export class PropertyManagementComponent {
  @Input() property!: Property;

  // properties: any;
  properties: any[] = [];

  filterOptions: any;

  constructor(private dialog: MatDialog, private http: HttpClient, private route: ActivatedRoute, private propertyService: PropertyService) {}

  ngOnInit() {
    this.management();
    this.property = history.state.property;
    this.property = this.propertyService.property || { propertyName: '', status: '', streetName: '', state: '', description: '', propertyType: '', rent: 0, city: '', zipCode: '', maintenanceHistory: '', image: null, places: [] };
  }

  management() {
    this.http.get<any>('./assets/Json/management.json').subscribe((data) => {
      this.properties = data.management;
      this.filterOptions = {
        statusOptions: data.statusOptions,
        propertyTypeOptions: data.propertyTypeOptions
      };
    });
  }
  userDialog(propertiesId: number) {
    const properties = this.properties.find(p => p.id === propertiesId);
    if (properties) {
      const dialogRef = this.dialog.open(PropertyDialogComponent, {
        width: '25%',
        height: '100%',
        position: { right: '0' },
        data: {
          id: properties.id,
          imagePath: properties.imagePath,
          name: properties.name
        },
      });
      dialogRef.afterClosed().subscribe((res:any) => {
        // Handle dialog close event
      });
    }
  }
}
