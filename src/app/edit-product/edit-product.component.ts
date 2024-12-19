import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { product } from '../core/models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  @Input() product: product | null = null;
  @Output() onUpdated = new EventEmitter<product>();

  productForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(0),
    ]),
    quantity: new FormControl('', [
      Validators.required,
      Validators.min(1),
    ]),
  });

  ngOnInit() {
    if (this.product) {
      //@ts-ignore
      this.productForm.patchValue(this.product); // Prefill form with the product data for editing
    }
  }

  // Method to handle form submission and call service to update the product
  onSubmit() {
    if (this.productForm.valid) {
      //@ts-ignore
      const updatedProduct: product = this.productForm.value;
      this.onUpdated.emit(updatedProduct); // Emit updated product to parent component
    }
  }

  get title() {
    return this.productForm.get('title');
  }

  get price() {
    return this.productForm.get('price');
  }

  get quantity() {
    return this.productForm.get('quantity');
  }
}
