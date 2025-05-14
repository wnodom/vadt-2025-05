import {
  Component,
  Input,
  output
} from '@angular/core';

import { Order } from '../api-types';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent {
  @Input({ required: true }) orders!: Order[];

  // @Output() selectOrder = new EventEmitter<Order>();

  selectOrder = output<Order>();

  // -------- external API above, internal implementation below

  pickOrder(order: Order) {
    this.selectOrder.emit(order);
  }
}
