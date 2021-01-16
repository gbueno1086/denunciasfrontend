
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
    private authService: AuthService){}
  
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
            console.log(result);
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
