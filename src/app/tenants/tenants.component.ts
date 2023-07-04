import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent {
  tenant: any;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.tenants();
  }

  tenants() {
    this.http.get<any[]>('./assets/Json/tenants.json').subscribe((data) => {
      this.tenant = data;
    });
  }

}
