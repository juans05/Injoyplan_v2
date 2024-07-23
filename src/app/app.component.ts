import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading = true;
  showModal = false;

  ngOnInit() {
    // Finaliza el loader después de 3 segundos y muestra el modal
    setTimeout(() => {
      this.isLoading = false;
      setTimeout(() => {
        this.showModal = true;
      }, 0); // Muestra el modal inmediatamente después de cargar la interfaz principal
    }, 3000); // 3 segundos
  }

  // Método para cerrar el modal
  closeModal() {
    this.showModal = false;
  }
}
