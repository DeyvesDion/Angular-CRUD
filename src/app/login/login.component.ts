import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({ 
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signup")
      .subscribe(res => {
      // match email and password
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email
            &&
            a.password === this.loginForm.value.password;
        })
        //condition for login
        if (user) {
          alert('sucessfully logged');
          this.loginForm.reset();
          this.router.navigate(['student'])
        }
        else {
          alert('user not found credentials');
        }
      },
      err=>(alert("something went wrong")))
    }

}
