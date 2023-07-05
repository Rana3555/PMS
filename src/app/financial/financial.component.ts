import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  imgicon: any;
}
@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent {
  finance: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.financial();
  }

  financial() {
    this.http.get<any[]>('./assets/Json/financial-table.json').subscribe((data) => {
      this.finance = data;
    });
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = this.financial;
}
