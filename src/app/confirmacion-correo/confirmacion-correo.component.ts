import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmacion-correo',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './confirmacion-correo.component.html',
  styleUrl: './confirmacion-correo.component.css'
})
export class ConfirmacionCorreoComponent {
  usuario: any;  // Cambia el tipo según la estructura de tu usuario
  codigoVerificacion: string = '';
  error: string = '';
  confirmacionExitosa: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    // Recuperar usuario de la ruta
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
    });
  }

  confirmarCorreo() {
    // Lógica para confirmar el correo y guardar el usuario (cambia según tus necesidades)
    // Aquí debes implementar la lógica de tu aplicación para enviar el código de verificación al servidor
    // y manejar la respuesta, actualizar el usuario, etc.

    if (this.codigoVerificacion === 'código correcto') {
      // Lógica exitosa, puedes mostrar mensaje de éxito y redirigir a la página de inicio
      this.confirmacionExitosa = true;
    } else {
      // Código de verificación incorrecto, muestra un mensaje de error
      this.error = 'Código de verificación incorrecto.';
    }
  }
}
