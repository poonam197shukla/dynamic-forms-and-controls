import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatRadioModule, MatDatepicker } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./dynamic-form-and -controls/button/button.component";
import { CheckboxComponent } from "./dynamic-form-and -controls/checkbox/checkbox.component";
import { DateComponent } from "./dynamic-form-and -controls/date/date.component";
import { DynamicFieldDirective } from "./dynamic-form-and -controls/dynamic-field/dynamic-field.directive";
import { DynamicFormComponent } from "./dynamic-form-and -controls/dynamic-form/dynamic-form.component";
import { InputComponent } from "./dynamic-form-and -controls/input/input.component";
import { RadioComponent } from "./dynamic-form-and -controls/radio/radio.component";
import { SelectComponent } from "./dynamic-form-and -controls/select/select.component";
import { ReactiveFormComponent } from "./simple-reactive-form/reactive-form/reactive-form.component";
import { ControlsComponent } from "./simple-reactive-form/controls/controls.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    CheckboxComponent,
    RadioComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    ReactiveFormComponent,
    ControlsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [
    ButtonComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    CheckboxComponent,
    RadioComponent
  ]
})
export class AppModule { }
