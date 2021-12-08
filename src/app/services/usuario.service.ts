import { Injectable } from '@angular/core';
import { Usuario } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  listUsuarios: Usuario[] = [
    {usuario: "ArmandoCor15", nombre: 'Armando', apellido: "Cortes", sexo: 'Masculino'},
    {usuario: "Juan134", nombre: 'Juan', apellido: "Hernandez", sexo: 'Masculino'},
    {usuario: "karoM12", nombre: 'Karolina', apellido: "Cortes", sexo: 'Femenino'},
    {usuario: "Adriana322", nombre: 'Adriana', apellido: "Gonzalez", sexo: 'Femenino'},
    {usuario: "Carlos322", nombre: 'Carlos', apellido: "Garita", sexo: 'Masculino'},
    {usuario: "Veronica2021", nombre: 'Veronica', apellido: "Vindas", sexo: 'Femenino'},
    {usuario: "NataliaGa23", nombre: 'Natalia', apellido: "Arroyo", sexo: 'Femenino'}
  ];

  constructor() {}

  getUsuario(){
    return this.listUsuarios.slice(); //Retorna una copia del listado de usuarios
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario)
    //unshift agrega el usuario al inicio de el array
  }

  getEditarUsuarios(index: number){
    return this.listUsuarios[index];
  }

  updateUsuario(usuario: Usuario, index: number){
    this.listUsuarios[index] = {usuario: "", nombre: '', apellido: "", sexo: ''}
    this.listUsuarios[index] = usuario;
  }
}
