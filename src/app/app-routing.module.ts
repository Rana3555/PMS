import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyManagementComponent } from './property-management/property-management.component';
import { TenantsComponent } from './tenants/tenants.component';
import { FinancialComponent } from './financial/financial.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UserTypeGuard } from './user-type.guard'; // Import the UserTypeGuard


const routes: Routes = [
  { path: '', component:DashboardComponent },
  { path: 'property-management',component:PropertyManagementComponent },
  { path: 'tenants',component:TenantsComponent },
  { path: 'financial',component:FinancialComponent },
  { path: 'maintenance', component:MaintenanceComponent },
  { path: 'add-property', component:AddPropertyComponent },
  { path: 'workflow', component:WorkflowComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    canActivate: [UserTypeGuard], // Apply the guard to the admin route
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: 'user',
    canActivate: [UserTypeGuard], // Apply the guard to the user route
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
