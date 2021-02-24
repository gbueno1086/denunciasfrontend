import { ActivatedRoute, Router } from '@angular/router';
import { StatusDenunciaService } from './../../../services/statusDenuncia/status-denuncia.service';
import { Component, OnInit } from '@angular/core';
import { StatusDenuncia } from '../../../models/statusDenuncia';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-status-denuncia-update',
  templateUrl: './status-denuncia-update.component.html',
  styleUrls: ['./status-denuncia-update.component.css']
})
export class StatusDenunciaUpdateComponent implements OnInit {

  statusDenuncia: StatusDenuncia;

  formStatusDenunciaUpdate: FormGroup;

  constructor( 
         private formBuilder: FormBuilder, 
         private  service : StatusDenunciaService,
         private router: Router,
         private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.criarFormStatusDenuncia();
    const   id = this.route.snapshot.paramMap.get('id')
    this.buscarteste(id);
  }
  buscarteste(id: string){
    this.service.getStatusDenunciaPorId(id)
    .subscribe(result =>{
    this.populaForm(result);
    })
  }
  criarFormStatusDenuncia(){
    this.formStatusDenunciaUpdate = this.formBuilder.group({
      id: [''],
      nomDenuncia:[''],
    });
  }
  populaForm(result: any){
    this.formStatusDenunciaUpdate.get("id").setValue(result.id);
    this.formStatusDenunciaUpdate.get("nomDenuncia").setValue(result.nomDenuncia);
  }
 
  onSubmit(form: NgForm){
       this.service.alterarStatusDenuncia(form.value)
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
    this.router.navigate(['/status-denuncia/status-denuncia']);
  }

}
