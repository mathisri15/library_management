import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequiredValidator } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor (private formBuilder:FormBuilder, private userService:UserService, private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fcon(){
    return this.loginForm.controls;
  }
  submit(){
    this.isSubmitted  = true;
    if(this.loginForm.invalid) return;

    this.userService.login({email:this.fcon.email.value,
    password: this.fcon.password.value}).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
