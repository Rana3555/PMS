import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PropertyDialogComponent } from '../property-dialog/property-dialog.component';
@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent {
  tenant: any[] = [];


  constructor(private dialog: MatDialog,private http: HttpClient) {}

  ngOnInit() {
    this.tenants();
  }

  tenants() {
    this.http.get<any[]>('./assets/Json/tenants.json').subscribe((data) => {
      this.tenant = data;
    });
  }

  userDialog(propertyId: number) {
    const property = this.tenant.find(p => p.id === propertyId);
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
