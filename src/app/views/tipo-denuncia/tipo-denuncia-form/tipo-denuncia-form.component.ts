import { TipoDenunciaService } from './../../../services/tipoDenuncia/tipo-denuncia.service';
import { TipoDenuncia } from './../../../models/tipoDenuncia';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-denuncia-form',
  templateUrl: './tipo-denuncia-form.component.html',
  styleUrls: ['./tipo-denuncia-form.component.css']
})
export class TipoDenunciaFormComponent implements OnInit {
  tipoDenuncia: TipoDenuncia;

  formTipoDenuncia: FormGroup;

  constructor( 
         private formBuilder: FormBuilder, 
         private  service : TipoDenunciaService,
         private router: Router) { }

  ngOnInit(): void {
    this.criarFormStatusDenuncia();
  }
  criarFormStatusDenuncia(){
    this.formTipoDenuncia = this.formBuilder.group({
      id: [''],
      descricao: ['']
   });
  }

  populaForm(result: any){
    this.formTipoDenuncia.get("id").setValue(result.id);
    this.formTipoDenuncia.get("descricao").setValue(result.descricao);
  }

  onSubmit(form: NgForm){
       this.service.criarTipoDenuncia(form.value)
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
    this.router.navigate(['/tipo-denuncia/tipo-denuncia-list']);
  }
}
