import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})

export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>;

  value: number;
  recipient: number;

  transfer() {
    alert('Solicitada nova transferência');
    const valueEmit = {
      value: this.value,
      recipient: this.recipient
    };
    this.onTransfer.emit(valueEmit);
    this.cleanObject();
  }

  cleanObject(){
    this.value = 0;
    this.recipient = 0;
  }
}
