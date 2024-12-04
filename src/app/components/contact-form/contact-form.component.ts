import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm=new FormGroup({
      myformGroup : new FormGroup({
        firstName: new FormControl(null, [Validators.max(5), Validators.required]), 
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      comment: new FormControl(null,Validators.required ),
    });
  }
  onSubmit(){
    console.log(this.reactiveForm);
  }
}
