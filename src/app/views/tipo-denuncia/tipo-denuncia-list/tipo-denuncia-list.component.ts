import { TipoDenuncia } from './../../../models/tipoDenuncia';
import { TipoDenunciaService } from './../../../services/tipoDenuncia/tipo-denuncia.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';


@Component({
  selector: 'app-tipo-denuncia-list',
  templateUrl: './tipo-denuncia-list.component.html',
  styleUrls: ['./tipo-denuncia-list.component.css']
})
export class TipoDenunciaListComponent implements OnInit {

  tipoD: TipoDenuncia[];
  tipoDenunciaSelecionado: TipoDenuncia;
  deleteModalRef: BsModalRef;

  @ViewChild('deleteModal') deleteModal;

  constructor(private service: TipoDenunciaService,
    private router: Router,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.buscaTodosTiposDenuncia();
  }

  buscaTodosTiposDenuncia(){
    this.service.buscarTodosTipoDenuncia()
    .subscribe( resp =>{ this.tipoD = resp; console.log(this.tipoD)}
      );
  }


  novoCadastro(){
    this.router.navigate(['/tipo-denuncia/tipo-denuncia-form']);
  }

  openModal(tipoDenuncia) {
    this.tipoDenunciaSelecionado = tipoDenuncia;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.service.deletarTipoDenuncia(this.tipoDenunciaSelecionado.id)
    .subscribe(sucesso =>{
         this.buscaTodosTiposDenuncia();
         this.deleteModalRef.hide();
    })
    
  }
 
  decline(): void {
    this.deleteModalRef.hide();
  }
}
