import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/userservice/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  
  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    })
  }

  onSubmit() {
    if(this.registerForm.valid){
      console.log("Data inserted Successfully", this.registerForm.value);
      let reqData={
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
       
      }
       this.user.Registration(reqData).subscribe((result:any)=>{console.log(result);})
    }
    else{
      console.log("invalid data", this.registerForm.value);
    }
  }

}
