import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaintanceDialogComponent } from '../maintance-dialog/maintance-dialog.component';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent {
  maintain: any[] = [];


  constructor(private dialog: MatDialog, private http: HttpClient) {}

  ngOnInit() {
    this.maintenance();
  }

  maintenance() {
    this.http.get<any[]>('./assets/Json/maintenance.json').subscribe((data:any) => {
      this.maintain = data;
    });
  }

  userDialog(propertyId: number) {
    const property = this.maintain.find(p => p.id === propertyId);
    if (property) {
      const dialogRef = this.dialog.open(MaintanceDialogComponent, {
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
