/****************************************************************************************************
1. Reactive forms - provide a model-driven approach to handling form inputs whose values change over time.
2. Provide direct, explicit access to the underlying form's object model. 
3. Compared to template-driven forms, they are more robust: they're more scalable, reusable, and testable.
****************************************************************************************************/

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/dynamic-form-and -controls/models/fields.interface';

@Component({
  exportAs: "dynamicForm",
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: FieldConfig[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  // get value() {
  //   return this.form.value;
  // }

  /**
    To use the FormBuilder service, follow the steps below:
      1. Import the FormBuilder class.
      2. Inject the FormBuilder service.
      3. Generate the form contents.
   */

  /**
    The FormBuilder service has three methods: 
      1.  group()
      2. control() 
      3. array()
      These are factory methods for generating instances in your component classes, 
      including form controls, form groups, and form arrays.
  */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createControl();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
