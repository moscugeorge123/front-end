import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  public product: FormGroup;
  public title = 'New product';

  constructor(
    private dialogRef: MatDialogRef<CreateProductComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit(): void {
    this.title = this.data ? 'Edit product' : this.title;

    this.product = this.formBuilder.group({
      name: [this.data?.name ?? '', Validators.required],
      description: [this.data?.description ?? '', Validators.required],
      price: [this.data?.price ?? '', Validators.required],
      discount: [this.data?.discount ?? '', Validators.required],
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
