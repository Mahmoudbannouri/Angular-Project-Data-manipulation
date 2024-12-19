import { Component } from '@angular/core';
import {Apartment} from "../core/models/Appartements";
import {ApartementsService} from "../services/apartements.service";

@Component({
  selector: 'app-appartements',
  templateUrl: './appartements.component.html',
  styleUrls: ['./appartements.component.css']
})
export class AppartementsComponent {

  listApartments: Apartment[] = [
    {
      apartNum: 101,
      floorNum: 1,
      surface: 75,
      terrace: true,
      surfaceterrace: 10,
      category: 'Studio',
      ResidenceId: 1,
    },
    {
      apartNum: 102,
      floorNum: 1,
      surface: 85,
      terrace: false,
      surfaceterrace: 0,
      category: 'T2',
      ResidenceId: 1,
    },
    {
      apartNum: 201,
      floorNum: 2,
      surface: 90,
      terrace: true,
      surfaceterrace: 12,
      category: 'T3',
      ResidenceId: 2,
    },
    {
      apartNum: 202,
      floorNum: 2,
      surface: 95,
      terrace: true,
      surfaceterrace: 15,
      category: 'T2',
      ResidenceId: 2,
    },
    {
      apartNum: 301,
      floorNum: 3,
      surface: 120,
      terrace: false,
      surfaceterrace: 0,
      category: 'T4',
      ResidenceId: 3,
    },
    {
      apartNum: 302,
      floorNum: 3,
      surface: 110,
      terrace: true,
      surfaceterrace: 18,
      category: 'T3',
      ResidenceId: 3,
    },
    {
      apartNum: 401,
      floorNum: 4,
      surface: 80,
      terrace: true,
      surfaceterrace: 8,
      category: 'T1',
      ResidenceId: 4,
    },
    {
      apartNum: 402,
      floorNum: 4,
      surface: 100,
      terrace: false,
      surfaceterrace: 0,
      category: 'T2',
      ResidenceId: 4,
    },
  ];
  listApartemntsdb:Apartment[]=[];
  search_item:string="";
  search_itemdb:string="";


  constructor(private appartService: ApartementsService) { }

  ngOnInit(): void {
    this.fetchApartments();
  }

  fetchApartments(): void {
    this.appartService.getAppartemnt().subscribe((data: Apartment[]) => {
      this.listApartemntsdb = data;
    });
  }

  filterByCategory(): Apartment[] {
    if (this.search_item) {
      return this.listApartments.filter(apartment =>
        apartment.category.toLowerCase().includes(this.search_item.toLowerCase())
      );
    }
    return this.listApartments;
  }

  filterByCategoryDb(): Apartment[] {
    if (this.search_itemdb) {
      return this.listApartemntsdb.filter(apartment =>
        apartment.category.toLowerCase().includes(this.search_itemdb.toLowerCase())
      );
    }
    return this.listApartemntsdb;
  }
}
