import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuyerService } from '../../services/buyer.service';

@Component({
  selector: 'app-finalize-command',
  templateUrl: './finalize-command.component.html',
  styleUrls: ['./finalize-command.component.scss'],
})
export class FinalizeCommandComponent {
  activeCamera = null;
  makingOrder = false;
  finishedOrder = false;

  constructor(
    private dialogRef: MatDialogRef<FinalizeCommandComponent>,
    private buyerService: BuyerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  successRead(shopId: string): void {
    if (!shopId) {
      return;
    }
    this.makingOrder = true;
    this.buyerService.payForProducts(shopId).subscribe(() => {
      this.makingOrder = false;
      this.finishedOrder = true;
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
