import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderServiceService } from '../Services/loader-service.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {
  
  constructor(public loader: LoaderServiceService) { }
}
