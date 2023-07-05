import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';


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

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
