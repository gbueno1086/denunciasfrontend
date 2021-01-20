import { ImovelService } from './../../../services/imovel/imovel.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Imovel } from '../../../models/imovel';

@Component({
  selector: 'app-imovel-form',
  templateUrl: './imovel-form.component.html',
  styleUrls: ['./imovel-form.component.css']
})
export class ImovelFormComponent implements OnInit {
  imovel: Imovel;
  formImovel: FormGroup;

  constructor(private formulario: FormBuilder, private imovelService: ImovelService) { }



  ngOnInit(): void {
    this.formImovel = this.formulario.group({
      id: [null],
      nomeContribuinte: [null],
      cpfContribuinte:  [null],
      logradouroImovel:[null],
      numeroImovel: [null],
      complementoImovel: [null],
      cepImovel: [null],
      bairroImovel: [null],
      setor: [null],
      quadra: [null],
      lote: [null],
      logradouroContribuinte: [null],
      numeroContribuinte: [null],
      complementoContribuinte: [null],
      bairroContribuinte: [null],
      cepContribuinte: [null],
      cidadeContribuinte: [null],
      valorVenalEdificacao: [null],
      valorVenalTerreno: [null],
      valorVenalImovel: [null],
      totalAreaEdificada: [null],
      areaTerreno: [null],
    })

    this.pesquisarId(100);
  }

  pesquisarId(id: number){
    this.imovelService.buscaImovelPorId(id)
    .subscribe( result =>{
      if(result){
           this.populaform(result);
           console.log(result);
      }else
      console.log("não ha dados para mostrar")
    })
  }

  populaform(result){
    this.formImovel.get("id").setValue(result.id);
    this.formImovel.get("nomeContribuinte").setValue(result.nomeContribuinte);
    this.formImovel.get("cpfContribuinte").setValue(result.cpfContribuinte);
    this.formImovel.get("logradouroImovel").setValue(result.logradouroImovel);
    this.formImovel.get("numeroImovel").setValue(result.numeroImovel);
    this.formImovel.get("complementoImovel").setValue(result.complementoImovel);
    this.formImovel.get("cepImovel").setValue(result.cepImovel);
    this.formImovel.get("bairroImovel").setValue(result.bairroImovel);
    this.formImovel.get("setor").setValue(result.setor);
    this.formImovel.get("quadra").setValue(result.quadra);
    this.formImovel.get("lote").setValue(result.lote);
    this.formImovel.get("logradouroContribuinte").setValue(result.logradouroContribuinte);
    this.formImovel.get("numeroContribuinte").setValue(result.numeroContribuinte);
    this.formImovel.get("complementoContribuinte").setValue(result.complementoContribuinte);
    this.formImovel.get("bairroContribuinte").setValue(result.bairroContribuinte);
    this.formImovel.get("cepContribuinte").setValue(result.cepContribuinte);
    this.formImovel.get("cidadeContribuinte").setValue(result.cidadeContribuinte);
    this.formImovel.get("valorVenalEdificacao").setValue(result.valorVenalEdificacao);
    this.formImovel.get("valorVenalTerreno").setValue(result.valorVenalTerreno);
    this.formImovel.get("valorVenalImovel").setValue(result.valorVenalImovel);
    this.formImovel.get("totalAreaEdificada").setValue(result.totalAreaEdificada);
    this.formImovel.get("areaTerreno").setValue(result.areaTerreno);

  }

}
