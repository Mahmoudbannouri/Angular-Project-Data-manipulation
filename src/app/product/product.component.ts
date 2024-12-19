import { Component } from '@angular/core';
import { product } from "../core/models/product";
import { CalculService } from "../services/calcul.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  listproduct!: product[];
  alertStock!: number;
  listfavourit!: product[];

  constructor(private service: CalculService) {}

  ngOnInit(): void {
    this.listproduct = [
      { id: 1, title: 'tshirt1', price: 20, quantity: 0, like: 0 },
      { id: 2, title: 'tshirt2', price: 50, quantity: 2, like: 0 },
      { id: 3, title: 'tshirt3', price: 10, quantity: 7, like: 0 }
    ];
    // Initialize listfavourit as an empty array
    this.listfavourit = [];
  }

  getAlertStock() {
    this.alertStock = this.service.getnumberOf(this.listproduct, 'quantity', 0);
  }

  addlikes(p: product) {
    p.like++;
  }

  addFavorit(f: product) {
    if (!this.listfavourit.includes(f)) {
      this.listfavourit.push(f);
    }
  }
}
