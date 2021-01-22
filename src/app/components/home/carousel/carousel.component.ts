import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slides = [
    { 'image': 'assets/images/01.jpeg' },
    { 'image': 'assets/images/02.jpeg' },
    { 'image': 'assets/images/03.jpeg' },
    { 'image': 'assets/images/04.jpeg' },
    { 'image': 'assets/images/05.jpeg' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
