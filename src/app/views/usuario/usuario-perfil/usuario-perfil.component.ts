import { UsuarioService } from './../../../services/usuarios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {

  usuario: Usuario;
  formPerfil: FormGroup;

  constructor( private formBuilder: FormBuilder, private  usuarioService : UsuarioService) { }

  ngOnInit(): void {
    
    const idLogado =  parseInt(localStorage.getItem("userId"));

    this.formPerfil = this.formBuilder.group({
      id: [null],
      nome: [null],
      cpf: [null],
      matricula: [null],
      login: [null],
      senha: [null],
      status: [null]
   });
 
   this.pesquisar(idLogado);

  }

  pesquisar(id: number){
    this.usuarioService.getUsuarioPorId(id)
    .subscribe(result =>{
      if(result){
           this.populaForm(result);
         console.log(result.id);
      }else{
        alert("não deu certo");
      }
    });
  }
  populaForm(result: any){
    this.formPerfil.get("id").setValue(result.id);
    this.formPerfil.get("nome").setValue(result.nome);
    this.formPerfil.get("cpf").setValue(result.cpf);
    this.formPerfil.get("matricula").setValue(result.matricula);
    this.formPerfil.get("login").setValue(result.login);
    this.formPerfil.get("senha").setValue(result.senha);
    this.formPerfil.get("status").setValue(result.status);
  }
}

