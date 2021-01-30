import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slides = [
    { 'image': 'assets/images/carousel/carousel1.png' },
    { 'image': 'assets/images/carousel/carousel2.png' },
    { 'image': 'assets/images/carousel/carousel3.png' },
    { 'image': 'assets/images/carousel/carousel4.png' },
    { 'image': 'assets/images/carousel/carousel5.png' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
