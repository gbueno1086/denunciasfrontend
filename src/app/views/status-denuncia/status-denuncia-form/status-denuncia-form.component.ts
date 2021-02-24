import { Router } from '@angular/router';
import { StatusDenunciaService } from './../../../services/statusDenuncia/status-denuncia.service';
import { StatusDenuncia } from './../../../models/statusDenuncia';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-status-denuncia-form',
  templateUrl: './status-denuncia-form.component.html',
  styleUrls: ['./status-denuncia-form.component.css']
})
export class StatusDenunciaFormComponent implements OnInit {
  statusDenuncia: StatusDenuncia;

  formStatusDenuncia: FormGroup;

  constructor( 
         private formBuilder: FormBuilder, 
         private  statusDenunciaService : StatusDenunciaService,
         private router: Router) { }

  ngOnInit(): void {
    this.criarFormStatusDenuncia();
  }
  criarFormStatusDenuncia(){
    this.formStatusDenuncia = this.formBuilder.group({
      id: [''],
      nomDenuncia: ['']
   });
  }

  populaForm(result: any){
    this.formStatusDenuncia.get("id").setValue(result.id);
    this.formStatusDenuncia.get("nomDenuncia").setValue(result.nomDenuncia);
  }

  onSubmit(form: NgForm){
       this.statusDenunciaService.gravarStatusDenuncia(form.value)
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
  voltar(){
    this.router.navigate(['/status-denuncia/status-denuncia']);
  }

}
