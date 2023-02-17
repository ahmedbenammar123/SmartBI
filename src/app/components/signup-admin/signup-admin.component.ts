import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {
  imagePreview:any='assets/img/logoinfo.png';
  signupForm: FormGroup;
  msgError: string;
  login: any = {};
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private userService: UserService,private router: Router) { }
  

  ngOnInit() {
      this.signupForm = this.formBuilder.group({
        img: [''],
        name:['',[Validators.required, Validators.minLength(3)]],
        firstName: ['',[Validators.required, Validators.minLength(3)]],
        lastName: ['',[Validators.required, Validators.minLength(3)]],
        address: ['',[Validators.required, Validators.minLength(3)]],
        tel: ['',[Validators.required]],
        email: ['',[Validators.email, Validators.required, Validators.pattern("[a-z0-9._%+-]+@[entreprise]+\.[com]{3,4}$")]],
        pwd:['',[Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
        category:[''],
        country: ['']
      })
      this.loginForm = this.formBuilder.group({
        email: [''],
        pwd: ['']
        })
    
  }
  signupAdmin() {
    this.signupForm.value.role='Admin'
    console.log("here user object", this.signupForm.value);
    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe(
      (Response) => {
        console.log("here response after signup", Response.message);
        if (Response.message == "Email exsist") {
          this.msgError = Response.message
        }
        else {
          this.router.navigate(['']);
        }

      }
    )
  }
    onImageSelected(event: Event) { 
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    console.log(this.imagePreview);
    
  }


}


