import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})

export class ShippingFormComponent implements OnInit {


  shippingForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.shippingForm = this.fb.group({
        nameShipping: this.fb.control ('',[Validators.required,Validators.maxLength(20)]),
        surnameShipping: this.fb.control('',[Validators.required,Validators.maxLength(20)]),
        nation: this.fb.control('',[Validators.required,Validators.maxLength(20)]),
        city: this.fb.control('',[Validators.required,Validators.maxLength(20)]),
        address: this.fb.control('',[Validators.required,Validators.maxLength(20)]),
        zipCode: this.fb.control('',[Validators.required,Validators.maxLength(20)]),
        phone: this.fb.control('',[Validators.required,Validators.maxLength(20)]),
        c_card: this.fb.control('',[Validators.required,Validators.maxLength(20)]),
        expire: this.fb.control('',[Validators.required,Validators.maxLength(20)])})
    }

}


