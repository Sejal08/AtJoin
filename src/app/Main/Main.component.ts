import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/users.service';


@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css']
})
export class MainComponent implements OnInit {
  loginForm: FormGroup;
  registrationForm: FormGroup;
  loginPopupForm: FormGroup;
  registrationPopupForm: FormGroup;
  errmsg: string;
  errmsg1: string;
  
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    public userService: UserService,
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      uemail: ['', Validators.required],
      upassword: ['', Validators.required],
    });

    this.registrationForm = this._formBuilder.group({
      ufname: ['', Validators.required],
      ulname: ['', Validators.required],
      uemail: ['', Validators.required],
      upassword: ['', Validators.required],
      ubirthdate: ['', Validators.required],
      ugender: ['', Validators.required],
    });

    this.loginPopupForm = this._formBuilder.group({
      uemail: ['', Validators.required],
      upassword: ['', Validators.required],
    });

    this.registrationPopupForm = this._formBuilder.group({
      ufname: ['', Validators.required],
      ulname: ['', Validators.required],
      uemail: ['', Validators.required],
      upassword: ['', Validators.required],
      ubirthdate: ['', Validators.required],
      ugender: ['', Validators.required],
    });
  }

  onLogin(loginForm){
    console.log(loginForm.value)
    this.userService.postLogUser(loginForm.value)
    .subscribe(data => {
          console.log(data.json())
          if (data.json() == "Email and password matched")
          {
            this.router.navigate(['/atjoin/about'])
          }
          else if(data.json() == "Password is incorrect"){
            this.errmsg = "*Password is incorrect";
          }
          else{
            this.errmsg = "*User is invalid";
          }
        })
  }    
  
  onSignup(registrationForm){
    console.log(registrationForm.value)
    this.userService.postRegUser(registrationForm.value)
    .subscribe(data => {
      console.log(data.json())
      if (data.json() == "Data submitted")
      {
        alert("You are Successfully Registered...!!!")
        this.router.navigate(['/atjoin/about'])
      }
      else{
        this.errmsg1 = "*Email is already used";
      }
    })
  }

  onLoginPopup(loginPopupForm){
    console.log(loginPopupForm.value)
    this.userService.postLogUser(loginPopupForm.value)
    .subscribe(data => {
          console.log(data.json())
          if (data.json() == "Email and password matched")
          {
            this.router.navigate(['/atjoin/about']);
          }
          else if(data.json() == "Password is incorrect"){
            alert("*Password is incorrect");
          }
          else{
            alert("*User is invalid");
          }
        })
  }

  onSignupPopup(registrationPopupForm){
    console.log(registrationPopupForm.value)
    this.userService.postRegUser(registrationPopupForm.value)
    .subscribe(data => {
      console.log(data.json())
      if (data.json() == "Data submitted")
      {
        alert("You are Successfully Registered...!!!")
        this.router.navigate(['/atjoin/about'])
      }
      else{
        alert("*Email is already used");
      }
    })
  }


  
}
