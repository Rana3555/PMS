import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  imgicon: any;
}
@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})

export class WorkflowComponent  implements OnInit,AfterViewInit  {
  basicinfoDiv : boolean = true;
  personalinfoDiv : boolean = false;
  professionalinfoDiv : boolean = false;
  earningsDiv : boolean = false;
  activityDiv : boolean = false;
  paymentDiv : boolean = false;
  ReferralsDiv : boolean = false;
  othersDiv : boolean = false;
  propertyManagement: any;
  tenantsDashboard: any;
  maintanceRequest: any;
  assignTask: any;
  doughnutChart: any;
  finance: any;

  constructor(private http: HttpClient) {   }

  ngOnInit(): void {
   console.log('My Profile');
   this.property();
   this.finacialList();
  }

  // chart implementation

  ngAfterViewInit() {
    this.createDoughnutChart();
    let data: any,
      options: any,
      chart: any,
      ctx: any = document.getElementById('areaChart') as HTMLElement;
   
    data = {
      labels: ['House', '', '','','','','','',''],
      datasets: [
        {
          label: 'House',
          data: [0, 50, 35, 60, 30, 70, 30, 80, 100],
          backgroundColor: 'rgba(40,125,200,.5)',
          borderColor: 'rgb(40,100,200)',
          fill: true,
          lineTension: 0.5,
          radius: 5,
        },
        // {
        //   label: 'Oranges',
        //   data: [0, 50, 45, 100],
        //   backgroundColor: 'rgba(75,10,125,.5)',
        //   borderColor: 'rgb(75,10,125)',
        //   fill: true,
        //   lineTension: 0.2,
        //   radius: 5,
        // },
      ],
    };

    options = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'top',
        text: 'House',
        fontSize: 12,
        fontColor: '#666',
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#999',
          fontSize: 14,
        },
      },
    };

    chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }

// doughnutchart 
createDoughnutChart() {
  const ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
  const doughnutChart = new Chart(ctx, {
    type: 'doughnut',

  data: {
    labels: ['Occupied', 'Vacant'],
    datasets: [{
      data: [60, 30 ], // Example data values
      backgroundColor: ['#064ACB','#E3E3E3']
    }]
  },
  options: {
    // Chart options go here
  }
});
}


  basicinfo(){
    this. basicinfoDiv = true;
    this. personalinfoDiv = false;
    this. professionalinfoDiv = false;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv  = false;
    this.ReferralsDiv = false;
    this.othersDiv = false;
   
  }
  personalinfo(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = true;
    this.professionalinfoDiv = false;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv  = false;
    this.ReferralsDiv = false;
    this.othersDiv = false;
  }
  professionalinfo(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv = true;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv  = false;
    this.ReferralsDiv = false;
    this.othersDiv = false;
  }
  earnings(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv= false;
    this.earningsDiv = true;
    this.activityDiv = false;
    this.paymentDiv = false;
    this.ReferralsDiv = false;
    this.othersDiv = false;
  }
  activity(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv = false;
    this.earningsDiv= false;
    this.activityDiv = true;
    this.paymentDiv  = false;
    this.ReferralsDiv = false;
    this.othersDiv = false;
  }
  payment(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv = false;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv= true;
    this.ReferralsDiv = false;
    this.othersDiv = false;
  }
  Referrals(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv= false;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv = false;
    this.ReferralsDiv = true;
    this.othersDiv = false;
  }
  others(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv = false;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv = false;
    this.ReferralsDiv = false;
    this.othersDiv = true;
  }

 
 

  property() {
    this.http.get<any>('./assets/Json/property-dash.json',).subscribe((data:any) => {
      this.propertyManagement = data.propertyManagement;
      this.maintanceRequest = data.maintanceRequest;
      this.tenantsDashboard = data.tenantsDashboard;
      this.assignTask = data.assignTask;
    });
  }

  finacialList(){
    this.http.get<any[]>('./assets/Json/financial-table.json').subscribe((data) => {
      this.finance = data;
    });
    }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol',];


  }


