import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrandService } from '../../service/brand.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
})
export class BrandComponent implements OnInit {
  form!: FormGroup;
  brands!: any[];

  constructor(private fb: FormBuilder, private brandService: BrandService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
    });
    this.getAllBrands();
  }

  createBrand() {
    console.log(this.form.value);
    this.brandService.saveBrand(this.form.value).subscribe((t) => {
      console.log(t);
    });
  }

  getAllBrands() {
    this.brandService.getBrands().subscribe((t) => {
      console.log(t);
      this.brands = t;
    });
  }
}
