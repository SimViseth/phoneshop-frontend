import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrandService } from '../../service/brand.service';

@Component({
  selector: 'app-brand',
  imports: [ReactiveFormsModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
})
export class BrandComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private brandService: BrandService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
    });
  }

  createBrand() {
    console.log(this.form.value);
  }
}
