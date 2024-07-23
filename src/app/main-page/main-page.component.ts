import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  currentSlide = 0;
  totalSlides = 3; // Número de imágenes del carrusel

  constructor() {
    // Iniciar el carrusel automáticamente
    setInterval(() => {
      this.nextSlide();
    }, 2000); // Cambiar de imagen cada 2 segundos
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarousel();
  }

  updateCarousel() {
    const carousel = this.carouselContainer.nativeElement as HTMLElement;
    if (carousel) {
      carousel.style.transform = `translateX(${-this.currentSlide * 100 / this.totalSlides}%)`;
    }
  }
}


