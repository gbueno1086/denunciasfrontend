import { Router } from '@angular/router';
import { UsuarioService } from './../../../services/usuarios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.buscaTodosUsuarios();
  }

  buscaTodosUsuarios(){
    this.usuarioService.getUsuario()
    .subscribe( resposta => this.usuarios = resposta)
  }

  novoCadastro(){
    this.router.navigate(['/usuario/usuario-form']);
  }

}
