import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';
import { AppUser } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.scss']
})
export class PageConnexionComponent implements OnInit {

  userFormGroup! : FormGroup;
  errorMessage : any;


  constructor(private fb:FormBuilder,
              private authService:AuthentificationService,
              private router:Router


              ) { }

  ngOnInit(): void {
    this.userFormGroup= this.fb.group({
      username: this.fb.control(""),
      password:this.fb.control(""),
    }
    )
  }


handleLogin(){
  let username=this.userFormGroup.value.username;
  let password=this.userFormGroup.value.password;
  this.authService.login(username,password).subscribe({

    next:(appUser:AppUser)=>{

      this.authService.authenticateUser(appUser).subscribe( {
         next:(data)=>{

      this.router.navigateByUrl("/dashboard")
         }


    })
  },
    error:(err)=>{
      this.errorMessage=err;

    }
  });
}
}
