import { navItems } from './../../_nav';
import { Router, Routes } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/core/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,private router: Router){}
    
  
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
       
            this.router.navigate(['/dashboard']);
          }else{
            alert("não deu certo");
          }

        })
    }
  }


    aplicaErro(nome){
   
    }
    resetForm(){
      this.formLogin.reset();
    }
 }
