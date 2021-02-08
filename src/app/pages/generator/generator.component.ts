import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {ViewEncapsulation} from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GeneratorComponent implements OnInit {

  servicesGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  services = new FormControl([]);
  servicesList: any[] = [
    {
      'value': 0,
      'option': 'Web Design'
    },
    {
      'value': 1,
      'option': 'Web Development'
    },
    {
      'value': 2,
      'option': 'E-Commerce Store'
    },
    {
      'value': 3,
      'option': 'Print & Logo Design'
    },
  ];

  constructor(@Inject(DOCUMENT) private document: Document, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.document.body.classList.add('quote-page');
    this.servicesGroup = this._formBuilder.group({
      servicesCtrl: [null, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  public logEvent(event: any) {
    console.log(this.servicesGroup.value);
  }
  public isWebSelected() {
    // if(this.servicesGroup.controls.value !== null){
    //   console.log(this.servicesGroup.controls.value[0]);
    // }
    return true;
  }


}
