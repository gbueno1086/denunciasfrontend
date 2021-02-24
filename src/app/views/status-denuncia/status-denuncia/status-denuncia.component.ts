import { BsModalService } from 'ngx-bootstrap/modal';
import { StatusDenunciaService } from './../../../services/statusDenuncia/status-denuncia.service';
import { StatusDenuncia } from './../../../models/statusDenuncia';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-status-denuncia',
  templateUrl: './status-denuncia.component.html',
  styleUrls: ['./status-denuncia.component.css']
})
export class StatusDenunciaComponent implements OnInit {

  statusD: StatusDenuncia[];
  formStatusDenunciaUpdate: FormGroup;
  statusSelecionado: StatusDenuncia;
  deleteModalRef: BsModalRef;
  
  @ViewChild('deleteModal') deleteModal;

  constructor(private service: StatusDenunciaService, 
    private router: Router,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.buscaTodosStatusDenuncia();
  }

  buscaTodosStatusDenuncia(){
    this.service.getStatusDenuncia()
    .subscribe( resposta => this.statusD = resposta)
  }

  populaForm(result: any){
    this.formStatusDenunciaUpdate.get("id").setValue(result.id);
    this.formStatusDenunciaUpdate.get("nomDenuncia").setValue(result.nomDenuncia);
  }

  novoCadastro(){
    this.router.navigate(['/status-denuncia/status-denuncia-form']);
  }

  deletar(){

  }

  openModal(statusDenuncia) {
    this.statusSelecionado = statusDenuncia;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.service.deletarStatusDenuncia(this.statusSelecionado.id)
    .subscribe(sucesso =>{
         this.buscaTodosStatusDenuncia();
         this.deleteModalRef.hide();
    })
    
  }
 
  decline(): void {
    this.deleteModalRef.hide();
  }

}
