import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/core/auth.service';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls:['login.component.css'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class LoginComponent implements OnInit {
  
  
  formLogin: FormGroup;
  bsModalRef: BsModalRef;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,private router: Router,
    private modalService: BsModalService){
  
    }

    ngOnInit() {
      
    this.formLogin = this.formBuilder.group({
       login: [null, Validators.required],
       senha: [null,Validators.required]
    });
  } 

  login(){
    if(this.formLogin){
        this.authService.login(this.formLogin.value)
        .subscribe(result =>{
          if(result.token){

            const access_token  = JSON.stringify(result.token);
            const userId = JSON.stringify(result.userId);
            const nomeUser = JSON.stringify(result.nomeUser);
            
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("userId", userId);
            localStorage.setItem("nomeUser", nomeUser);
           
            //this.router.navigate(['/dashboard']);
            setTimeout(()=> this.router.navigate(['/dashboard']), 2000);  
            this.handleOk();
          }else{
             alert('usuario invalido');
          }

          }, error =>{
              console.log(error);
               this.handleErro();
          })
    }
  }


    aplicaErro(nome){
   
    }
    resetForm(){
      this.formLogin.reset();
    }
    handleErro(){
      this.bsModalRef = this.modalService.show(AlertModalComponent);
      this.bsModalRef.content.type = 'warning';
      this.bsModalRef.content.msg = 'Erro na autenticação, Login ou senha incorretos';
    }
    close(){
      this.bsModalRef.hide();
    }
    handleOk(){
      this.bsModalRef = this.modalService.show(AlertModalComponent);
      this.bsModalRef.content.type = 'success';
      this.bsModalRef.content.msg ='Autenticado, você será direcionado...';
    }
    
  }
