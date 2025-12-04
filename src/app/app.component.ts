import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrandComponent } from './component/brand/brand.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrandComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'phoneshop-frontend';
}
