import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  nombre: string;
  apellidos: string;
  email: string;
  password: string;
  error: boolean = false;

  constructor(private router: Router){
    this.nombre = '';
    this.apellidos = '';
    this.email = '';
    this.password= '';
  }

  registrarUsuario(){
    if(this.nombre === '' || this.apellidos === '' || this.email === '' || this.email === '' || this.password === ''){
      this.error = true;
    }else{
      this.error = false;
      this.router.navigate(['/confirmacion-correo']);
    }
    console.log('Registrando usuario:', this.nombre, this.apellidos, this.email, this.password);
  }
}
