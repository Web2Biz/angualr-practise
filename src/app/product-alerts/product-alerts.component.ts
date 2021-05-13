import { Component,Input,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent{
  // Reciving Value From Parent Component
  @Input() product: any;
  // Notify Parent Commponet That Event Happend
  @Output() notify = new EventEmitter();

}
