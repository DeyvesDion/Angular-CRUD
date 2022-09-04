import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signUpForm!: FormGroup
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name:['', Validators.required],
      mobile:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  // Creation

  signup() {
    this.http.post<any>('http://localhost:3000/signup/',this.signUpForm.value)
      .subscribe(res => {
        alert("Student registred sucessfully");
        this.signUpForm.reset();
        this.router.navigate(['/login']);
      },
        err => {
        alert("Something went wrong");
      })
  }

}
