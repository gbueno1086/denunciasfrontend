import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, NgForm } from '@angular/forms';
import { UsuarioService } from './../../../services/usuarios/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { fromEventPattern } from 'rxjs';
import { Validacoes } from '../../../shared/validacoes';

const idUsuario = parseInt(localStorage.getItem('userId'));


@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

   usuario: Usuario;
   formUsuario: FormGroup;

  constructor(private router: Router, private usuarioService: UsuarioService, private formBuider: FormBuilder) { }

  ngOnInit(): void {
   this.criarFormUsuario();
  }
  criarFormUsuario(){
 
    this.formUsuario = this.formBuider.group({     
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', Validators.required],
      matricula: ['', Validators.required],
      foto:[null],
      celular: ['', Validators.required],
      email:['', [Validators.email]],
      login: ['', Validators.required],
      senha: ['', Validators.required], 
      confirmarSenha: ['', [Validators.required]],       
      status: [1],
      dataCadastro:[''],
      dataAlteracao: [''],
      usuarioCadastrou: [idUsuario]
   },
   {
     validator : Validacoes.SenhasCombinam
   });
  }
  onSubmit(form:NgForm){
      this.usuarioService.gravarUsuario(form.value)
      .subscribe( data =>{
          console.log(true);
          this.formUsuario.reset();
        },
         (erro: any) => alert('Erro ao submeter Formulário'));
  }

    static equalsTo(otherField: string){
      const validator = (formControl: FormControl) =>{
          if(otherField == null){
            throw new Error('È necessario informar um campo');
          }
          
          if(!formControl.root || !(<FormGroup>formControl.root).controls){
            return null;
          }
          const field = (<FormGroup>formControl.root).get(otherField);
          
          if(!field){
            throw new Error('É necessário informar um campo valido!');
          }
          if(field.value !== formControl.value){
             return {equalsTo : otherField}
          }
          return null;
      };
      return validator;
    }
}
