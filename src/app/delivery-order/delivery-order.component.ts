import { Component } from '@angular/core';
import { Delivery } from '../data/delivery';
import { DeliveryService } from '../service/delivery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-order',
  templateUrl: './delivery-order.component.html',
  styleUrls: ['./delivery-order.component.css']
})
export class DeliveryOrderComponent {

deliveriesSize:Number;
newDelivery:Delivery;

  constructor(private deliveryService:DeliveryService, private router:Router){
    this.deliveriesSize = deliveryService.getDeliveriesSize();
    this.newDelivery = new Delivery();
  }

  public saveNewDeliveryOrder(){
    this.deliveryService.setNewDelivery(this.newDelivery);
    this.newDelivery = new Delivery();
    this.deliveriesSize = this.deliveryService.getDeliveriesSize();
  }

  public goToOrderList(){
    this.router.navigate(['delivery-list']);
  }

}
