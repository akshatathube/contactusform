import { Component, OnInit } from '@angular/core';

// import classes which are required for reactive forms
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { Z_ASCII } from 'zlib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
UserForm:FormGroup;
submitted=false;

  constructor(private fbobj:FormBuilder)
  {
  }
  ngOnInit(){

 this.UserForm = this.fbobj.group(
    {
      // Add Multiple validations
      firstname :['', [Validators.required,Validators.pattern('[a-zA-z ]*')]],
      lastname : ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email : ['',[Validators.required,Validators.email]],
      phone : ['',[Validators.required,Validators.pattern('[0-9 ]*')]],
      city : ['',[Validators.required,Validators.minLength(4)]],
      state : ['',Validators.required],
      zipcode : ['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(6)]],
    });
  }
  get formData(){return this.UserForm.controls}
    onSubmit() {
  
    this.submitted = true;
      if(this.UserForm.invalid){
        return;
      }
      alert(JSON.stringify(this.UserForm.value))
    }
}
