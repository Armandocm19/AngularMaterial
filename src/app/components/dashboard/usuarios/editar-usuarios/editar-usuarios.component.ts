import { Element } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: '../crear-usuario/crear-usuario.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {

  @ViewChild('Boton') Boton!: ElementRef

  form: FormGroup;

  public editUsuario: any 

  listUsuarios: Usuario[] = []
  
  sexo: any[] = [
    'Masculino', 
    'Femenino'
  ];

  constructor(private fb: FormBuilder, 
    private _usuarioService: UsuarioService, 
    private router: Router,
    private _route: ActivatedRoute,
    private renderer: Renderer2,
    private _snackBar: MatSnackBar) {
this.form = this.fb.group({
usuario: ['Hola', Validators.required],
nombre: ['', Validators.required],
apellido: ['', Validators.required],
sexo: ['', Validators.required]
})
}

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      var id = params.id;
      this.getEditarUsuario(id);
    })
  }

  getEditarUsuario(id:any){
    this.editUsuario = this._usuarioService.getEditarUsuarios(id);
    this.form = this.fb.group({
      usuario: [this.editUsuario.usuario, Validators.required],
      nombre: [this.editUsuario.nombre, Validators.required],
      apellido: [this.editUsuario.apellido, Validators.required],
      sexo: [this.editUsuario.sexo, Validators.required]
      })
      // this.form.disable()
      // let text = this.renderer.createText("Hola")
      // this.renderer.appendChild(this.Boton.nativeElement, text);
  }

  agregarUsuario(){

    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo
    }

    this._route.params.subscribe(params => {
      var id = params.id;
      this._usuarioService.updateUsuario(user, id);
    })
    this.router.navigate(['/dashboard/usuarios'])
      this._snackBar.open('El usuario fue agregado con éxito', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
  }

  volverUsuario(){
    this.router.navigate(['/dashboard/usuarios'])
  }

}
