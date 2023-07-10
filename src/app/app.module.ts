import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyManagementComponent } from './property-management/property-management.component';
import { TenantsComponent } from './tenants/tenants.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FinancialComponent } from './financial/financial.component';
import { SideDialogComponent } from './side-dialog/side-dialog.component';
// import { NgxPermissionsModule } from 'ngx-permissions';
import { CommonModule } from '@angular/common';
import { AddPropertyComponent } from './add-property/add-property.component';
import { MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MaintanceDialogComponent } from './maintance-dialog/maintance-dialog.component';
import { PropertyDialogComponent } from './property-dialog/property-dialog.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { NgChartjsModule } from 'ng-chartjs';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PropertyManagementComponent,
    TenantsComponent,
    MaintenanceComponent,
    FinancialComponent,
    NavbarComponent,
    SideDialogComponent,
    AddPropertyComponent,
    MaintanceDialogComponent,
    PropertyDialogComponent,
    WorkflowComponent,
    ImageUploadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    // NgxPermissionsModule.forRoot(),
    CommonModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgChartjsModule,
    MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
