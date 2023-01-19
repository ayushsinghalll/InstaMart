import { Component } from '@angular/core';
import {AuthService} from "./authservice";
import {Router} from "@angular/router";
import {FormGroup, NgForm} from "@angular/forms";
import {User} from "./user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  users:User[]=[];
  pageTitle:string='Log In';
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {this.authService.fetchAllUsers().subscribe(data=>this.users=data)}
  cancel():void{

    this.router.navigate(['home']);
  }
  onSubmit(loginForm:NgForm){
    if(loginForm && loginForm.valid){
      const userName = loginForm.form.value.userName;
      const password=loginForm.form.value.password;
      //this user is logged in
      this.authService.validateUser({userName,password},this.users);
      if(this.authService.redirectToUrl){
        this.router.navigateByUrl(this.authService.redirectToUrl);
      }
      else{
        this.router.navigate(['product']);
      }



    }

  }
}
