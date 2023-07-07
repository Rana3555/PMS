import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})

export class WorkflowComponent  implements OnInit {
  basicinfoDiv : boolean = true;
  personalinfoDiv : boolean = false;
  professionalinfoDiv : boolean = false;
  earningsDiv : boolean = false;
  activityDiv : boolean = false;
  paymentDiv : boolean = false;
  ReferralsDiv : boolean = false;
  othersDiv : boolean = false;
  finance: any;



  constructor(private http: HttpClient) {   }

  ngOnInit(): void {
   console.log('My Profile');
   this.financial();

  }

  // chart implementation

  ngAfterViewInit() {
    let data: any,
      options: any,
      chart: any,
      ctx: any = document.getElementById('areaChart') as HTMLElement;

    // JSON:
    // Uncomment below and import * as data from 'json-path.json'.
    // Or Angular 14, create anonymous JSON array and fetch with http
    // constructor(private _http; HttpClient) {} ...
    // Replace datasets with dataArray

    // for (let key in chartData.items) {
    //   if (chartData.items.hasOwnProperty(key)) {
    //     this.dataArray.push(chartData.items[key]);
    //   }
    // }

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
  }
  earnings(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv= false;
    this.earningsDiv = true;
    this.activityDiv = false;
    this.paymentDiv = false;
  }
  activity(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv = false;
    this.earningsDiv= false;
    this.activityDiv = true;
    this.paymentDiv  = false;
  }
  payment(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv = false;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv= true;
  }

  // copyMessage(text: string) {
  //   navigator.clipboard.writeText(text).then().catch(e => console.log(e));
  // }

  financial() {
    this.http.get<any[]>('./assets/Json/property-dash.json').subscribe((data) => {
      this.finance = data;
    });
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
