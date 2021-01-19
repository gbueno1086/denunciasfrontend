import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmitenteService } from '../../services/emitente/emitente.service';
import { Emitente } from '../../models/emitente';

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
    this.formEmitente = this.formBuilder.group({
      id: [null],
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
       this.buscarEmitente(1);
    }
    buscarEmitente(id: Number){
      this.emitenteService.getEmitentePorId(1)
      .subscribe(result => {
        if(result){
            this.populaForm(result);
        }else{
          alert("Não tem dados para mostrar!");
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
  }


