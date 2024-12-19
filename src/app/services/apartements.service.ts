import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartment } from '../core/models/Appartements';

@Injectable({
  providedIn: 'root'
})
export class ApartementsService {
  private apiUrl = 'http://localhost:3000';  // Define the API base URL

  constructor(private http: HttpClient) {}

  // Get all apartments
  getAppartemnt() {
    return this.http.get<Apartment[]>(`${this.apiUrl}/Apartment`);
  }

  // Post a new apartment
  postApartment(p: Apartment) {
    return this.http.post(`${this.apiUrl}/Apartment`, p);
  }

  // Delete an apartment by ID
  deleteApartment(id: number) {
    return this.http.delete(`${this.apiUrl}/Apartment/${id}`);
  }

  // Update an existing apartment
  updateProduct(Apartment: Apartment) {
    return this.http.put<Apartment>(`${this.apiUrl}/Apartment/${Apartment.apartNum}`, Apartment);
  }

  // Get an apartment by apartment number
  getApartmentBynum(apartNum: string): Observable<Apartment> {
    return this.http.get<Apartment>(`${this.apiUrl}/Apartment/${apartNum}`);
  }

  // Get apartments by residence ID
  // In ApartementsService
  getApartmentsByResidence(residenceId: number): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(`${this.apiUrl}/Apartment?residenceId=${residenceId}`);
  }

}
