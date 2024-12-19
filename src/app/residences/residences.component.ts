import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { CommonService } from "../services/common.service";

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {

  search_item: string = "";
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R4.jpg',
      status: 'En Construction',
    },
  ];
  favoris: Residence[] = [];

  constructor(private commonService: CommonService) {}

  // Show the location of the residence
  showLocation(address: string): void {
    if (address === 'inconnu') {
      alert("L'adresse est inconnue");
    } else {
      alert("L'adresse est " + address);
    }
  }

  // Add residence to the favorite list
  addFavorite(residence: Residence): void {
    if (!this.favoris.includes(residence)) {
      this.favoris.push(residence);
    }
    console.log(this.favoris);
  }

  // Filter residences by address based on the search input
  filtreByAddress(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.search_item.toLowerCase())
    );
  }

  // Use the service method to get the count of residences with the same address value
  getSameValueByAddress(): number {
    return this.commonService.getSameValueOf(this.listResidences, 'address', this.search_item);
  }
}
