import { TipoDenuncia } from './../../../models/tipoDenuncia';
import { DenunciaService } from './../../../services/denuncia/denuncia.service';
import { Denuncia } from './../../../models/denuncia';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDenunciaService } from '../../../services/tipoDenuncia/tipo-denuncia.service';

@Component({
  selector: 'app-denuncia-update',
  templateUrl: './denuncia-update.component.html',
  styleUrls: ['./denuncia-update.component.css']
})
export class DenunciaUpdateComponent implements OnInit {
  Denuncia: Denuncia;
  tipodenuncia: TipoDenuncia[];

  formDenunciaUpdate: FormGroup;

  constructor( 
         private formBuilder: FormBuilder, 
         private  service : DenunciaService,
         private tipoDenunciaService: TipoDenunciaService,
         private router: Router,
         private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.criarFormTipoDenuncia();
    const   id = this.route.snapshot.paramMap.get('id')
    this.buscarteste(id);
    this.buscartipoDenuncia();

  }
  buscarteste(id: string){
    this.service.buscarDenunciaPorId(id)
    .subscribe(result =>{
    this.populaForm(result);
    })
  }
  criarFormTipoDenuncia(){
    this.formDenunciaUpdate = this.formBuilder.group({
     id:[''],
     tipodenuncia:[''],
     divisao:[''],
     nomeDenunciante:[''],
     cpfDenunciante: [''],
     cepDenunciante:[''],
    logradouroDenunciante:[''],
    numeroDenunciante :[''],
    complementoDenunciante:[''],
     bairroDenunciante: [''],
    cidadeDenunciante :[''],
    estadoDenunciante:[''],
    telefoneDenunciante:[''],
    nomeDenunciado: [''],
    cpfDenunciado: [''],
    cepDenunciado: [''],
    logradouroDenunciado:[''],
    numeroDenunciado:[''],
    complementoDenunciado:[''],
     bairroDenunciado:[''],
    tipoDenuncia:[''],
    descricaoDenuncia:[''],
  	dataCadastro:[''],
    tempoVerificacao:[''],
    dataVencimento:[''],
    usuarioCadastrou:[''],
    status: [''],
    
    });
  }
  populaForm(result: any){
    this.formDenunciaUpdate.get("nomeDenunciante").setValue(result.nomeDenunciante);
    this.formDenunciaUpdate.get("cpfDenunciante").setValue(result.cpfDenunciante);
    this.formDenunciaUpdate.get("cepDenunciante").setValue(result.cepDenunciante);
    this.formDenunciaUpdate.get("logradouroDenunciante").setValue(result.logradouroDenunciante);
    this.formDenunciaUpdate.get("numeroDenunciante").setValue(result.numeroDenunciante);
    this.formDenunciaUpdate.get("complementoDenunciante").setValue(result.complementoDenunciante);
    this.formDenunciaUpdate.get("bairroDenunciante").setValue(result.bairroDenunciante);
    this.formDenunciaUpdate.get("cidadeDenunciante").setValue(result.cidadeDenunciante);
    this.formDenunciaUpdate.get("estadoDenunciante").setValue(result.estadoDenunciante);
    this.formDenunciaUpdate.get("telefoneDenunciante").setValue(result.telefoneDenunciante);
    this.formDenunciaUpdate.get("nomeDenunciado").setValue(result.nomeDenunciado);
    this.formDenunciaUpdate.get("cpfDenunciado").setValue(result.cpfDenunciado);
    this.formDenunciaUpdate.get("cepDenunciado").setValue(result.cepDenunciado);
    this.formDenunciaUpdate.get("logradouroDenunciado").setValue(result.logradouroDenunciado);
    this.formDenunciaUpdate.get("numeroDenunciado").setValue(result.numeroDenunciado);
    this.formDenunciaUpdate.get("complementoDenunciado").setValue(result.complementoDenunciado);
    this.formDenunciaUpdate.get("bairroDenunciado").setValue(result.bairroDenunciado);
    this.formDenunciaUpdate.get("tipodenuncia").setValue(result.tipodenuncia.descricao);


  }
 
 
  cancelar(){
    this.router.navigate(['/tipo-denuncia/denuncia-list']);
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

}
