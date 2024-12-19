import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { product } from "../core/models/product";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-listproductavechttp',
  templateUrl: './listproductavechttp.component.html',
  styleUrls: ['./listproductavechttp.component.css']
})
export class ListproductavechttpComponent implements OnInit {
  listproduct: product[] = [];
  selectedProduct: product | null = null;
  showAddForm: boolean = false; // Control visibility of Add Product form
  ///detaisl stuff
  product!:product;
  //@ts-ignore
  idP:!number;
  // Form for adding a product with stricter validations
  productForm: FormGroup;

  constructor(private productService: ProductService,private act:ActivatedRoute) {
    this.productForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$') // Only letters and spaces allowed
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'), // Only numbers allowed (positive integers)
        Validators.min(1) // Price must be positive
      ]),
      quantity: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'), // Only numbers allowed (positive integers)
        Validators.min(1) // Quantity must be at least 1
      ])
    });
  }


  ngOnInit() {
    this.loadProducts();
    this.idP =+this.act.snapshot.params['id'];
    this.getproductDetails( this.idP);
  }

  loadProducts() {
    this.productService.getProduct().subscribe((data: product[]) => {
      this.listproduct = data;


    });
  }

  selectForEdit(product: product) {
    this.selectedProduct = { ...product }; // Clone the product to avoid direct mutation
    this.productForm.patchValue(product); // Prefill form with the product data for editing
  }

  onProductUpdated(updatedProduct: product) {
    this.productService.updateProduct(updatedProduct).subscribe(() => {
      this.loadProducts(); // Reload products after update
      this.selectedProduct = null; // Reset selected product after update
    });
  }

  delete(p: product) {
    this.productService.deleteProduct(p.id).subscribe(() => {
      this.listproduct = this.listproduct.filter(product => product.id !== p.id); // Remove product from list
    });
  }

  save() {
    if (this.productForm.valid) {
      const productToSave: product = this.productForm.value;
      if (this.selectedProduct) {
        // Edit existing product
        productToSave.id = this.selectedProduct.id;
        this.productService.updateProduct(productToSave).subscribe(() => {
          this.loadProducts();
          this.selectedProduct = null;
        });
      } else {
        // Add new product
        this.productService.postProduct(productToSave).subscribe(() => {
          this.loadProducts();
          this.productForm.reset();
          this.showAddForm = false; // Hide the form after saving
        });
      }
    }
  }

  // Getters for form controls to simplify validation access in the HTML
  get title() {
    return this.productForm.get('title');
  }

  get price() {
    return this.productForm.get('price');
  }

  get quantity() {
    return this.productForm.get('quantity');
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm; // Toggle visibility of the add form
  }

  getproductDetails(id:number){
    const listproduct = [
      {id: 1, title: 'tshirt1', price: 20, quantity: 0, like: 0},
      {id: 2, title: 'tshirt2', price: 50, quantity: 2, like: 0},
      {id: 3, title: 'tshirt3', price: 10, quantity: 7, like: 0}
    ];


    this.product = listproduct.find(r => r.id === id)!;
  }
}
