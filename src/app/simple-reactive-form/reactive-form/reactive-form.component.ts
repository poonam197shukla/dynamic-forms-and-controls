import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'simple-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  /**
   Few important things for Reactive Form:
   1. FormGroup
   2. FormControl
   3. FormBuilder

   Form
    Elements
      Input
      Email
      Password
      Radio
      Checkbox
      Select
      Image

    FormGroup
      Each element is a FormControl
      When 1 or more FormControl are grouped together they are called - FormGroup
    
    FormBuilder
      Its an abstraction layer which makes it easy to design and build our forms.
      Its is used for building complex form structure
      Add/Remove
      Array of formControls

    FormBuilder is better than FormGroup

    FormBuilder -> breaks form into smaller piece of code
      - which is reusable
      - FromBuilder has 3 important things:
        1. FormGroup
        2. FormArray
        3. FormControl

    How to set values in form:
    1. set the value of entire form in one go
    2. setting the form value using setValue()
    3. setting the value of limited fields using patchValue

    How to get values from the form:
    1. get value of entire Form
    2. get value of specified form control
    3. get value on changes


    Built-in reactive form validations:
    1. Validators along with form group as a parameter in FormControl
    2. Multiple validations using Validators.compose
    3. Get the state of the form as -> valid or not
    4. Disable the form

    Reactive Form - Form states  - to be added in html below each control in <span> tag
    1. .ng-valid - at any given point of time form is valid/or not
    2. .ng-invalid - 
    3. .ng-pristine
    4. .ng-pending
    5. .ng-dirty
    6. .ng-touched
    7. .ng-untouched

    How to reset any fomr: This will reset the entire form
    - this.reactiveForm.reset()

    Reactive Forms Value Changes
    - 
   */

  /**
    1. Import ReactiveFormsModule and FormsModule
    2. created form group of form mapped in html
    3. Injected FormBuilder
    4. 
  **/
 
  reactiveForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    // this.reactiveForm= new FormGroup({
    //   'loanName': new FormControl(),
    //   'loanDescription': new FormControl(),
    //   'loanType':new FormControl(),
    //   'loanAmount': new FormControl()
    // });

    //** 1. set the value of entire form in one go ad adding validations to each form control
    //based on this form is disabled till it gets a valid value
    this.reactiveForm=this.fb.group({
      'loanName': new FormControl('Personal Loan',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
      ]),
      'loanDescription': new FormControl('Personal Loan Descrtiption', Validators.required),
      //Validators.compose is to group them together
      'loanType':new FormControl('Savings',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
    ])),
      'loanAmount': new FormControl('100000')
    });

    /* 2. setting the form value using setValue()
    this.reactiveForm=this.fb.group({
      'loanName': new FormControl(),
      'loanDescription': new FormControl(),
      'loanType':new FormControl(),
      'loanAmount': new FormControl()
    });
    const loanObj={
      'loanName': 'My Personal Loan Application',
      'loanDescription': 'My Personal Loan Descrtiption',
      'loanType':'Savings loan type',
      'loanAmount': '2500000'
    };
    this.reactiveForm.setValue(loanObj);*/

    // 3. setting the value of limited fields using patchValue
    // only diffrence between setValue and patchValue is - - you dont have to pass entire fields/keys/object
    // this.reactiveForm.patchValue(loanObj);
  }


  addLoanType(){
    //1. get value of entire Form
    console.log(this.reactiveForm.value)

    //2. get value of specified form control
    console.log(this.reactiveForm.get('loanType').value);

    //3. get value of entire form on changes of one field
    this.reactiveForm.valueChanges.subscribe(data=>{
      console.log(data)
    })

    // get value of particular field on changes of that field
    this.reactiveForm.get('loanName').valueChanges.subscribe(data=>{
      console.log("values changes of loan Name:", data);
    })

    // Reactive Form - Form states 
    console.log("ng-valid: ", this.reactiveForm.valid);
    console.log("ng-invalid: ", this.reactiveForm.invalid);
    console.log("ng-pristine: ", this.reactiveForm.pristine);
    console.log("ng-pending: ", this.reactiveForm.pending);
    console.log("ng-dirty: ", this.reactiveForm.dirty);
    console.log("ng-touched: ", this.reactiveForm.touched);
    console.log("ng-untouched: ", this.reactiveForm.untouched);

    if(this.reactiveForm.valid){
      console.log("form is valid");
    }

    if(this.reactiveForm.invalid){
      console.log("form is invalid");
    }
  }

  reset(){
    //reset set all fields of form to null
    this.reactiveForm.reset();
    console.log(this.reactiveForm.reset());
  }

}
