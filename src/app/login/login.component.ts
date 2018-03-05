import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: any = {};
  private passwordType: string = "password";
  constructor() { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.user);
  }

  showPassword(){
    if(this.passwordType === "password")
      this.passwordType = "text";
    else
      this.passwordType = "password";
  }
}