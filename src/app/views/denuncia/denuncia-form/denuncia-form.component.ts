import { TipoDenuncia } from './../../../models/tipoDenuncia';
import { TipoDenunciaService } from './../../../services/tipoDenuncia/tipo-denuncia.service';
import { DenunciaService } from './../../../services/denuncia/denuncia.service';
import { Denuncia } from './../../../models/denuncia';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-denuncia-form',
  templateUrl: './denuncia-form.component.html',
  styleUrls: ['./denuncia-form.component.css']
})
export class DenunciaFormComponent implements OnInit {

  denuncia: Denuncia;
  tipodenuncia: TipoDenuncia[];

  formDenuncia: FormGroup;

  constructor( 
         private formBuilder: FormBuilder, 
         private  service : DenunciaService,
         private tipoDenunciaService: TipoDenunciaService,
         private router: Router) { }

  ngOnInit(): void {
    this.criarFormDenuncia();
    this.buscartipoDenuncia();
  }
  criarFormDenuncia(){
    this.formDenuncia = this.formBuilder.group({
      nomeDenunciante: [''],
     cpfDenunciante:[''],
     rgDenunciante:[''],
     logradouroDenunciante:[''],
     numeroDenunciante :[''],
     complementoDenunciante:[''],
      bairroDenunciante: [''],
     cidadeDenunciante :[''],
     estadoDenunciante:[''],
     telefoneDenunciante:[''],
     nomeDenunciado: [''],
     cpfDenunciado:[''],
     rgDenunciado:[''],
     logradouroDenunciado:[''],
     numeroDenunciado:[''],
     complementoDenunciado: [''],
      bairroDenunciado:[''],
     tipoDenuncia:[''],
     descricaoDenuncia: [''],
     status: [''],
     tempoVerificacao: [''],
     usuarioCadastrou :['1'],
   });
  }

  buscartipoDenuncia(){
      this.tipoDenunciaService.buscarTodosTipoDenuncia()
      .subscribe( resposta =>{
           this.tipodenuncia = resposta;
      },
      erro =>{
        if(erro.status == 400){
          console.log(erro);
        }
      });
  }



  onSubmitDenuncia(form: NgForm){
       this.service.salvarDenuncia(form.value)
       .subscribe( data =>{
         console.log(true);
       },
         erro =>{
           if(erro.status == 400){
             console.log(erro);
           }
         }

       );
  }
  voltar(){
    this.router.navigate(['/denuncia/denuncia-list']);
  }

}
