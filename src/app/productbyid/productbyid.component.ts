import { Component, OnInit } from '@angular/core';
import { product } from "../core/models/product";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-productbyid',
  templateUrl: './productbyid.component.html',
  styleUrls: ['./productbyid.component.css']
})
export class ProductbyidComponent implements OnInit {
  idP!: number;
  //static details stuff
  product!: product | null; // Static data

  dynamicProduct!: product | null; // Dynamic data

  constructor(private act: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    // Statique parms reading
    this.idP = +this.act.snapshot.params['id']; // Convert to number
    this.getStaticProductDetails(this.idP); // Fetch static data

    this.idP = +this.act.snapshot.params['id']; // This can stay as number for static data

    // Pass string ID for dynamic data fetching
    const id = this.act.snapshot.paramMap.get('id')!;
    this.getDynamicProductDetails(id); // Pass the string ID he
  }


  // Fetch product details from static data
  getStaticProductDetails(id: number) {
    const listproduct = [
      { id: 1, title: 'tshirt1', price: 20, quantity: 0, like: 0 },
      { id: 2, title: 'tshirt2', price: 50, quantity: 2, like: 0 },
      { id: 3, title: 'tshirt3', price: 10, quantity: 7, like: 0 }
    ];
    this.product = listproduct.find(r => r.id === id) || null;
  }

  // Fetch dynamic product details
  getDynamicProductDetails(id: string) {
    this.productService.getProductById(id).subscribe({
      next: (data: product) => {
        this.dynamicProduct = data;
      },
      error: (error) => {
        console.error('Error fetching dynamic product:', error);
      }
    });
  }



}
