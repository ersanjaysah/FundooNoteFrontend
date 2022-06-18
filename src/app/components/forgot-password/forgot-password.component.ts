import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/userservice/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted=false;

  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.forgotForm=this.fb.group({
      email: ['',[Validators.required, Validators.email]],
    });
  }
  onSubmit(){
    this.submitted=true;
    if(this.forgotForm.valid){
      console.log("valid password",this.forgotForm.value);
      let reqData={
        email:this.forgotForm.value.email,
      }
      this.user.forgot(reqData).subscribe((result:any)=>{console.log(result);
    })
   
    
    }
  }

}
