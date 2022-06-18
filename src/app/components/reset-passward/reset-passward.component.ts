import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/userservice/user.service';

@Component({
  selector: 'app-reset-passward',
  templateUrl: './reset-passward.component.html',
  styleUrls: ['./reset-passward.component.scss']
})
export class ResetPasswardComponent implements OnInit {
  resetForm!: FormGroup;
  submitted=false;
  token:any;

  constructor(private fb:FormBuilder,private User:UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.token=this.activeRoute.snapshot.paramMap.get('token')
    this.resetForm=this.fb.group({
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6)]],
    });
  }

  onSubmit(){
    this.submitted=true;

    if(this.resetForm.valid){
      console.log("Password reset successfully", this.resetForm.value);
      let reqdata={
        password:this.resetForm.value.password,
        confirmPassword:this.resetForm.value.confirmPassword,
      }
      console.log(this.token);
      console.log(reqdata)
      this.User.resetPassword(reqdata, this.token).subscribe((result:any) => { console.log(result)})
    }
    else{
      console.log("Oops!!! password reset failed", this.resetForm.value);
    }
  }

}
