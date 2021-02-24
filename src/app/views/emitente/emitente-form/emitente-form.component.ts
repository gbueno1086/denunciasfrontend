import { EmitenteService } from './../../../services/emitente/emitente.service';
import { Emitente } from './../../../models/emitente';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-emitente-form',
  templateUrl: './emitente-form.component.html',
  styleUrls: ['./emitente-form.component.css']
})
export class EmitenteFormComponent implements OnInit {

  emitente: Emitente;
  formEmitente: FormGroup;

  
  constructor(private formBuilder: FormBuilder, private emitenteService: EmitenteService) { }

  ngOnInit(): void {
       this.criarFormEmitente();
       this.buscarEmitente(1);
    }

    criarFormEmitente(){
      this.formEmitente = this.formBuilder.group({
        id: [''],
        nomeEmitente:[null],
        cnpjEmitente: [null],
        logradouroEmitente:[null],
        numero_emitente: [null],
        complementoEmitente: [null],
        bairroEmitente: [null],
        cepEmitente: [null],
        telefoneEmitente:[null],
        emailEmitente:[null],
        logoEmitente: [null],
      });
    }
    buscarEmitente(id: Number){
      this.emitenteService.getEmitentePorId(1)
      .subscribe(result => {
        if(result){
            this.populaForm(result);
        }else{
          alert("Nenhum emitente Cadastrado, cadastre um emitente");
        }
      })
    }
    populaForm(result: any){
      this.formEmitente.get("id").setValue(result.id);
      this.formEmitente.get("nomeEmitente").setValue(result.nomeEmitente);
      this.formEmitente.get("cnpjEmitente").setValue(result.cnpjEmitente);
      this.formEmitente.get("logradouroEmitente").setValue(result.cnpjEmitente);
      this.formEmitente.get("numero_emitente").setValue(result.numero_emitente);
      this.formEmitente.get("complementoEmitente").setValue(result.complementoEmitente);
      this.formEmitente.get("bairroEmitente").setValue(result.bairroEmitente);
      this.formEmitente.get("cepEmitente").setValue(result.cepEmitente);
      this.formEmitente.get("telefoneEmitente").setValue(result.telefoneEmitente);
      this.formEmitente.get("emailEmitente").setValue(result.emailEmitente);
      this.formEmitente.get("logoEmitente").setValue(result.logoEmitente);
    }
  
    onSubmitEmitente(form: NgForm){
       this.emitenteService.postEmitente(form.value)
       .subscribe( data =>{
            console.log(true);
       },
       erro => {
        if(erro.status == 400) {
          console.log(erro);
        }
      }
       );
    }

}
