import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../service/userservice/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted=false;

  constructor(private fb:FormBuilder,private user:UserService,private snackBar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
    });
  }
  onSubmit(){
    this.submitted=true;

    
    if(this.loginForm.valid){
      console.log("login successful", this.loginForm.value);
      let reqData={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      this.user.login(reqData).subscribe((result:any)=>{console.log(result);
        localStorage.setItem('token',result.token)
        this.router.navigateByUrl('/dashboard/notes')
      })
    }
    else{
      console.log("login Unsuccessful", this.loginForm.value);
    }
    this.snackBar.open('Login Successfully..!!!', '..', {
      duration: 3000,
    })
  }
}
