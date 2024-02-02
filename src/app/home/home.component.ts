import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email: string;
  password: string;

  constructor(private router: Router){
    this.email = '';
    this.password = '';
  }

  iniciarSesion(){
    console.log('Datos introducidos en home: ', this.email, this.password);
  }

  crearCuenta() {
    this.router.navigate(['/registro']);
  }
}
