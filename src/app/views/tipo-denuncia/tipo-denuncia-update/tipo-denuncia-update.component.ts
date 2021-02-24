import { TipoDenunciaService } from './../../../services/tipoDenuncia/tipo-denuncia.service';
import { TipoDenuncia } from './../../../models/tipoDenuncia';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tipo-denuncia-update',
  templateUrl: './tipo-denuncia-update.component.html',
  styleUrls: ['./tipo-denuncia-update.component.css']
})
export class TipoDenunciaUpdateComponent implements OnInit {

  tipoDenuncia: TipoDenuncia;

  formTipoDenunciaUpdate: FormGroup;

  constructor( 
         private formBuilder: FormBuilder, 
         private  service : TipoDenunciaService,
         private router: Router,
         private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.criarFormTipoDenuncia();
    const   id = this.route.snapshot.paramMap.get('id')
    this.buscarteste(id);
  }
  buscarteste(id: string){
    this.service.buscarTipoDenunciaPorId(id)
    .subscribe(result =>{
    this.populaForm(result);
    })
  }
  criarFormTipoDenuncia(){
    this.formTipoDenunciaUpdate = this.formBuilder.group({
      id: [''],
      descricao:[''],
    });
  }
  populaForm(result: any){
    this.formTipoDenunciaUpdate.get("id").setValue(result.id);
    this.formTipoDenunciaUpdate.get("descricao").setValue(result.descricao);
  }
 
  onSubmit(form: NgForm){
       this.service.alterarTipoDenuncia(form.value)
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
  cancelar(){
    this.router.navigate(['/tipo-denuncia/tipo-denuncia-list']);
  }

}
