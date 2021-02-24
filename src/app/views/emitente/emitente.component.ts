import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmitenteService } from '../../services/emitente/emitente.service';
import { Emitente } from '../../models/emitente';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-emitente',
  templateUrl: './emitente.component.html',
  styleUrls: ['./emitente.component.css']
})
export class EmitenteComponent implements OnInit {
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
            this.emitente = result;;
        }else{
          alert("Nenhum emitente Cadastrado, cadastre um emitente");
        }
      })
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


