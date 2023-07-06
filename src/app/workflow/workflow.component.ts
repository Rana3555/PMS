import { Component, OnInit } from '@angular/core';

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
  constructor() {
  
   }

  ngOnInit(): void {
   console.log('My Profile')
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

  // copyMessage(text: string) {
  //   navigator.clipboard.writeText(text).then().catch(e => console.log(e));
  // }
  
}
