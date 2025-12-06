import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrlCreate = 'http://localhost:8080/api/v1/create-brand';
const baseUrlGet = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  saveBrand(brand: any) {
    return this.http.post(baseUrlCreate, brand);
  }

  getBrands() {
    return this.http.get<any>(baseUrlGet);
  }
}
