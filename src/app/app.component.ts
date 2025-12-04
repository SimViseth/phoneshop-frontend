import { Component } from '@angular/core';
import { BrandComponent } from './component/brand/brand.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [BrandComponent],
})
export class AppComponent {
  title = 'phoneshop-frontend';
}
