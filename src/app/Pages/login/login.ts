import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 loginForm : FormGroup;

 constructor(private fb:FormBuilder){
  this.loginForm=this.fb.group({});
 }

 onLogin(){}
}
