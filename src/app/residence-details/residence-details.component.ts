import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  idR!:number;
  residence!: Residence;  // Define a variable to hold the full residence data
  constructor(private act:ActivatedRoute){}

  ngOnInit(){
    this.idR =+this.act.snapshot.params['id']; 
    this.getResidenceDetails( this.idR); 
  }

  ///statiquement les donner et on va les chercher avec l'id passer on parametre 
  getResidenceDetails(id: number) {
  
    const listResidences: Residence[] = [
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

    this.residence = listResidences.find(r => r.id === id)!; 
  }

}
