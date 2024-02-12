import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../entity/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminComponent implements OnInit {
  listaUsuarios: any[] | undefined; // Ajusta el tipo según la estructura de tu usuario

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    // Llama a tu servicio para obtener la lista de usuarios al inicializar el componente
    this.obtenerListaUsuarios();
  }

  obtenerListaUsuarios(): void {
    this.usuarioService.obtenerTodosLosUsuarios().subscribe(
      (usuarios: Usuario[]) => {
        this.listaUsuarios = usuarios;
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }

  eliminarUsuario(email: string): void {
    this.usuarioService.eliminarUsuarioPorEmail(email).subscribe(() => {
      this.obtenerListaUsuarios();
    });
  }
}
