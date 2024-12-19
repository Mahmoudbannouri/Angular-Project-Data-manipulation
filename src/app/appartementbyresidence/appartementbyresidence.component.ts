import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from '../core/models/Appartements';
import { ApartementsService } from '../services/apartements.service';

@Component({
  selector: 'app-appartementbyresidence',
  templateUrl: './appartementbyresidence.component.html',
  styleUrls: ['./appartementbyresidence.component.css']
})
export class AppartementbyresidenceComponent implements OnInit {
  apartments: Apartment[] = [];
  residenceId: number = 0;

  constructor(
    private appartementService: ApartementsService,
    private route: ActivatedRoute // To access the route parameters
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.residenceId = +params['id']; // Convert to number
      this.fetchApartmentsByResidence(); // Fetch apartments for this residenceId
    });
  }

  fetchApartmentsByResidence(): void {
    this.appartementService.getAppartemnt().subscribe(
      (apartments) => {
        //@ts-ignore
        this.apartments = apartments.filter(apartment => apartment.ResidenceId === this.residenceId.toString());
      },
      (error) => {
        console.error('Error fetching apartments:', error);
      }
    );
  }

}
