import { BsModalService } from 'ngx-bootstrap/modal';
import { Denuncia } from './../../../models/denuncia';
import { DenunciaService } from './../../../services/denuncia/denuncia.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-denuncia-list',
  templateUrl: './denuncia-list.component.html',
  styleUrls: ['./denuncia-list.component.css']
})
export class DenunciaListComponent implements OnInit {

  denuncia: Denuncia[];

  denunciaSelecionada: Denuncia;
  deleteModalRef: BsModalRef;

  @ViewChild('deleteModal') deleteModal;

  constructor(private service: DenunciaService,
    private router: Router,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.buscaTodasDenuncias();
  }

  buscaTodasDenuncias(){
    this.service.getTodasDenuncias()
    .subscribe( resp =>{ this.denuncia = resp.content}
      );
  }


  novoCadastro(){
    this.router.navigate(['/denuncia/denuncia-form']);
  }

  openModal(denuncia) {
    this.denunciaSelecionada = denuncia;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }
 
  confirm(): void {
    // this.service.deletarDenuncia(this.tipoDenunciaSelecionado.id)
    // .subscribe(sucesso =>{
    //      this.buscaTodosTiposDenuncia();
         this.deleteModalRef.hide();
    // })
    
  }
 
  decline(): void {
    this.deleteModalRef.hide();
  }
}
