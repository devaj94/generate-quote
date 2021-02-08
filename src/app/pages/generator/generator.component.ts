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
  timeFrame: any[] = [
    {
      'value': 0,
      'option': 'Haven\'t Decided'
    },
    {
      'value': 1,
      'option': 'ASAP'
    },
    {
      'value': 2,
      'option': 'Within 1-3 months'
    },
    {
      'value': 3,
      'option': 'Not in a rush'
    },
  ];
  estimatedPages = [
    {
      'value': 0,
      'option': '1-5'
    },
    {
      'value': 1,
      'option': '5-10'
    },
    {
      'value': 3,
      'option': '10+'
    }
  ];
  estimatedBudget = [{'value': 0,'option': '50-100'}, {'value': 1, 'option': '100-300'}, {'value': 3,'option': '300-500'}, {'value': 4, 'option': '500+'}];
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
