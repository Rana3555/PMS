import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent {
  maintain: any;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.maintenance();
  }

  maintenance() {
    this.http.get<any[]>('./assets/Json/maintenance.json').subscribe((data) => {
      this.maintain = data;
    });
  }

}
