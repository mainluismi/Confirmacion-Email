import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../entity/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080'; // Ajusta la URL de acuerdo a tu backend

  constructor(private http: HttpClient) {}

  // Método para obtener todos los usuarios
  obtenerTodosLosUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  // Método para obtener un usuario por su ID
  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }

  // Método para autenticar a un usuario
  autenticarUsuario(email: string, password: string): Observable<Usuario> {
    const url = `${this.apiUrl}/autenticar`;
    return this.http.post<Usuario>(url, { email, password });
  }

  // Método para registrar un nuevo usuario
  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  // Método para eliminar un usuario
  eliminarUsuarioPorEmail(email: string): Observable<void> {
    const url = `${this.apiUrl}/${email}`;
    return this.http.delete<void>(url);
  }
}
