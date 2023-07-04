import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SideDialogComponent } from '../side-dialog/side-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  properties: any[] = [];
  payment: any[] = [];

  constructor(private dialog: MatDialog, private http: HttpClient) {}

  ngOnInit() {
    this.loadProperties();
    this.currency();
  }

  loadProperties() {
    this.http.get<any[]>('./assets/Json/dashboard-properties.json').subscribe((data) => {
      this.properties = data;
    });
  }
  currency() {
    this.http.get<any[]>('./assets/Json/dashboard-payment.json').subscribe((data) => {
      this.payment = data;
    });
  }

  usrDialog(propertyId: number) {
    const property = this.properties.find(p => p.id === propertyId);
    if (property) {
      const dialogRef = this.dialog.open(SideDialogComponent, {
        width: '30%',
        height: '100%',
        position: { right: '0' },
        data: {
          id: property.id,
          imagePath: property.imagePath,
          name: property.name
        },
      });
      dialogRef.afterClosed().subscribe((res) => {
        // Handle dialog close event
      });
    }
  }

}
